#import <RNKiwiMobile/RNKiwiMobile.h>
#import "ViewController.h"

@interface ViewController () <UIGestureRecognizerDelegate, RNKiwiViewControllerFlowDelegate, RNKiwiCurrencyManager, RNKiwiTranslationProvider>

@property (nonatomic, strong) RNKiwiViewController *activeVc;
@property (nonatomic, strong) RNKiwiViewController *hotelsVc;
@property (nonatomic, strong) RNKiwiViewController *newerHotelsVc;

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

- (IBAction)pushOldHotelsView:(id)sender {
  RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"KiwiHotels"
                                         initialProperties:@{
                                                             @"coordinates": @{
                                                                 @"latitude" : @59.9139,
                                                                 @"longitude": @10.7522
                                                                 },
                                                             @"language": @"en",
                                                             @"currency": @"EUR",
                                                             @"lastNavigationMode": @"push",
                                                             @"dimensions": [self windowDimensions]
                                                             }];
  
  [self setActiveViewController:vc];
  [[self navigationController] pushViewController:vc animated:YES];
}

- (IBAction)presentOldHotelsView:(id)sender {
    RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"KiwiHotels"
                                         initialProperties:@{
                                                             @"coordinates": @{
                                                               @"latitude" : @59.9139,
                                                               @"longitude": @10.7522
                                                             },
                                                             @"language": @"en",
                                                             @"currency": @"EUR",
                                                             @"lastNavigationMode": @"present",
                                                             @"dimensions": [self windowDimensions]
                                                           }];
  
    [self setActiveViewController:vc];
    [[self navigationController] presentViewController:vc animated:YES completion:nil];
}

- (IBAction)presentNewHotelsView:(id)sender {
    RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"NewKiwiHotels"
                                                initialProperties:@{
                                                                    @"bookingComAffiliate": @"123456",
                                                                    @"language": @"en",
                                                                    @"currency": @"EUR",
                                                                    @"lastNavigationMode": @"present",
                                                                    @"dimensions": [self windowDimensions],
                                                                    @"checkin": @"2018-09-20",
                                                                    @"checkout": @"2018-09-22",
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
