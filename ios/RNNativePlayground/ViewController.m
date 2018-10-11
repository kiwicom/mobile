#import <RNKiwiMobile/RNKiwiMobile.h>
#import "ViewController.h"

@interface ViewController () <UIGestureRecognizerDelegate, RNKiwiViewControllerFlowDelegate, RNKiwiCurrencyManager, RNKiwiTranslationProvider>

@property (nonatomic, strong) RNKiwiViewController *activeVc;

@end

@implementation ViewController

- (instancetype)initWithCoder:(NSCoder *)coder {
  self = [super initWithCoder:coder];
  
  if (self) {
    /**
     * In order to create bridge upfront, call this method before showing ViewController. Otherwise,
     * it's created at the runtime lazily
     */
    [[RNKiwiSharedBridge sharedInstance] initBridge];
  }
  return self;
}

- (void)viewDidAppear:(BOOL)animated{
  self.navigationController.navigationBar.hidden = YES;
  self.navigationController.interactivePopGestureRecognizer.delegate = self;
}

- (NSDictionary *)windowDimensions {
  CGRect windowRect = self.view.window.frame;
  return @{
    @"width": @(windowRect.size.width),
    @"height": @(windowRect.size.height)
  };
}

- (void)setActiveViewController:(RNKiwiViewController *)vc {
  __weak typeof(self) weakSelf = self;

  [vc setCurrencyFormatter:weakSelf];
  [vc setTranslationProvider:weakSelf];
  [vc setFlowDelegate:weakSelf];
  
  _activeVc = vc;
}

- (IBAction)presentNewHotelsView:(id)sender {
  NSDateFormatter *dateFormatter =[[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd"];
  NSString *todayDate = [dateFormatter stringFromDate:[NSDate date]];
  NSString *tomorrowDate = [dateFormatter stringFromDate:[[NSDate date] dateByAddingTimeInterval:86400]];
  
    RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"NewKiwiHotels"
                                                          initialProperties:@{
                                                            @"language": @"en",
                                                            @"currency": @"EUR",
                                                            @"lastNavigationMode": @"present",
                                                            @"dimensions": [self windowDimensions],
                                                            @"checkin": todayDate,
                                                            @"checkout": tomorrowDate,
                                                            @"version": @"3.7.13-9d55ad66",
                                                            @"cityName": @"Barcelona",
                                                            @"cityId": @"aG90ZWxDaXR5Oi0zNzI0OTA=",
                                                            @"roomsConfiguration": @[
                                                                @{
                                                                  @"adultsCount": @1,
                                                                  @"children": @[
                                                                      @{
                                                                        @"age": @2
                                                                        }
                                                                      ]}
                                                                ]
                                                          }];
    
    [self setActiveViewController:vc];
    [[self navigationController] presentViewController:vc animated:YES completion:nil];
}


# pragma mark - RNKiwiViewControllerFlowDelegate

- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController {
  [self.navigationController popViewControllerAnimated:YES];
}

# pragma mark - RNKiwiCurrencyManager

- (NSString *)formattedPrice:(NSNumber *)price withCurrency:(NSString *)currencyCode {
  return [[price stringValue] stringByAppendingString:currencyCode];
}

#pragma mark - RNKiwiTranslationProvider

- (NSString *)localizedStringWithKey:(NSString *)key {
  // In real app it would give us the String based on localization
  return nil;
}

#pragma mark - UIGestureRecognizer

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldReceiveTouch:(UITouch *)touch {
  if (self.navigationController.interactivePopGestureRecognizer == gestureRecognizer) {
    return [_activeVc isInteractivePopGestureAllowed];
  }
  return YES;
}

@end
