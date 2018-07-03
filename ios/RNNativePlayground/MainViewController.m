#import <RNKiwiMobile/RNKiwiMobile.h>
#import "MainViewController.h"
#import "RNHotelsOptions.h"
#import "RNBookingsOptions.h"
#import "RNProfileOptions.h"

@interface MainViewController () <UIGestureRecognizerDelegate, RNKiwiViewControllerFlowDelegate, RNKiwiCurrencyManager, RNKiwiTranslationProvider>

@property (nonatomic, strong) RNKiwiViewController *activeVc;
@property (nonatomic, strong) RNKiwiViewController *hotelsVc;
@property (nonatomic, strong) RNKiwiViewController *bookingsVc;
@property (nonatomic, strong) RNKiwiViewController *profileVc;

@end

@implementation MainViewController{
  RNHotelsOptions *rnHotelsOptions;
  RNBookingsOptions *rnBookingsOptions;
  RNProfileOptions *rnProfileOptions;
  NSDictionary *rnWindowDimensions;
}

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
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:[[RNBookingsOptions alloc] init]];
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:[[RNProfileOptions alloc] init]];
  }
  return self;
}

- (void)viewDidAppear:(BOOL)animated {
  self.navigationController.navigationBar.hidden = YES;
  self.navigationController.interactivePopGestureRecognizer.delegate = self;
  
  rnWindowDimensions = [self windowDimensions];
  rnHotelsOptions = [[RNHotelsOptions alloc] initWithDimensions:rnWindowDimensions];
  rnBookingsOptions = [[RNBookingsOptions alloc] initWithDimensions:rnWindowDimensions];
  rnProfileOptions = [[RNProfileOptions alloc] initWithDimensions:rnWindowDimensions];
}

- (NSDictionary *)windowDimensions {
  CGRect windowRect = self.view.window.frame;
  return @{
            @"width": @(windowRect.size.width),
            @"height": @(windowRect.size.height)
            };
}


- (IBAction)showHotelsView:(id)sender {
  __weak typeof(self) weakSelf = self;
  _hotelsVc = [[RNKiwiViewController alloc] initWithOptions:rnHotelsOptions];
  
  [_hotelsVc setCurrencyFormatter:weakSelf];
  [_hotelsVc setTranslationProvider:weakSelf];
  [_hotelsVc setFlowDelegate:weakSelf];
  
  _activeVc = _hotelsVc;
  [[self navigationController] pushViewController:_hotelsVc animated:YES];
}

- (IBAction)showBookingsView:(UIButton *)sender {
  __weak typeof(self) weakSelf = self;
  _bookingsVc = [[RNKiwiViewController alloc] initWithOptions:rnBookingsOptions];

  [_bookingsVc setCurrencyFormatter:weakSelf];
  [_bookingsVc setTranslationProvider:weakSelf];
  [_bookingsVc setFlowDelegate:weakSelf];
  
  _activeVc = _bookingsVc;
  [[self navigationController] pushViewController:_bookingsVc animated:YES];
}

- (IBAction)showProfileView:(UIButton *)sender {
  __weak typeof(self) weakSelf = self;
  _profileVc = [[RNKiwiViewController alloc] initWithOptions:rnProfileOptions];
  
  [_profileVc setCurrencyFormatter:weakSelf];
  [_profileVc setTranslationProvider:weakSelf];
  [_profileVc setFlowDelegate:weakSelf];
  
  _activeVc = _profileVc;
  [[self navigationController] pushViewController:_profileVc animated:YES];
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
