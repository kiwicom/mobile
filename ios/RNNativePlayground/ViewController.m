#import <RNKiwiMobile/RNKiwiMobile.h>
#import "ViewController.h"
#import "RNHotelsOptions.h"
#import "RNNewHotelsOptions.h"

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
     * In order to create bridge upfront, either create an instance of RNKiwiViewController
     * ahead of time (here) and store as an instance property, or call this method instead.
     *
     * RNKiwiViewController does exactly the same thing for you behind the scenes if you use
     * the former approach.
     */
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:[[RNHotelsOptions alloc] init]];
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:[[RNNewHotelsOptions alloc] init]];
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

- (void)setupActiveVC:(RNKiwiViewController *)vc {
  __weak typeof(self) weakSelf = self;

  [vc setCurrencyFormatter:weakSelf];
  [vc setTranslationProvider:weakSelf];
  [vc setFlowDelegate:weakSelf];
  
  _activeVc = vc;
}

- (IBAction)pushOldHotelsView:(id)sender {
  _hotelsVc = [[RNKiwiViewController alloc] initWithOptions:[[RNHotelsOptions alloc]
                                               initWithParams:[self windowDimensions] :@"push"]];
  
  [self setupActiveVC:_hotelsVc];
  
  [[self navigationController] pushViewController:_hotelsVc animated:YES];
}

- (IBAction)presentOldHotelsView:(id)sender {
    _hotelsVc = [[RNKiwiViewController alloc] initWithOptions:[[RNHotelsOptions alloc]
                                                 initWithParams:[self windowDimensions] :@"present"]];
  
    [self setupActiveVC:_hotelsVc];
    [[self navigationController] presentViewController:_hotelsVc animated:YES completion:nil];
}

- (IBAction)presentNewHotelsView:(id)sender {
    _newerHotelsVc = [[RNKiwiViewController alloc] initWithOptions:[[RNNewHotelsOptions alloc]
                                                   initWithParams:[self windowDimensions] :@"present"]];
    
    [self setupActiveVC:_newerHotelsVc];
    [[self navigationController] presentViewController:_newerHotelsVc animated:YES completion:nil];
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
