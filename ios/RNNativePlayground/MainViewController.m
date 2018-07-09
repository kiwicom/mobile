#import <RNKiwiMobile/RNKiwiMobile.h>
#import "MainViewController.h"
#import "RNHotelsOptions.h"
#import "RNBookingsOptions.h"
#import "NoLoggedInViewController.h"

@interface MainViewController () <UIGestureRecognizerDelegate, RNKiwiViewControllerFlowDelegate, RNKiwiCurrencyManager, RNKiwiTranslationProvider>

@property (nonatomic, strong) RNKiwiViewController *activeVc;
@property (nonatomic, strong) RNKiwiViewController *hotelsVc;
@property (nonatomic, strong) RNKiwiViewController *bookingsVc;

@end

@implementation MainViewController{
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

- (IBAction)showHotelsView:(id)sender {
  __weak typeof(self) weakSelf = self;
  _hotelsVc = [[RNKiwiViewController alloc] initWithOptions:[[RNHotelsOptions alloc] initWithDimensions:[self windowDimensions]]];
  
  [_hotelsVc setCurrencyFormatter:weakSelf];
  [_hotelsVc setTranslationProvider:weakSelf];
  [_hotelsVc setFlowDelegate:weakSelf];
  
  _activeVc = _hotelsVc;
  [[self navigationController] pushViewController:_hotelsVc animated:YES];
}

- (IBAction)showBookingsView:(UIButton *)sender {
  __weak typeof(self) weakSelf = self;
  _bookingsVc = [[RNKiwiViewController alloc] initWithOptions:[[RNBookingsOptions alloc] initWithDimensions:[self windowDimensions]]];

  [_bookingsVc setCurrencyFormatter:weakSelf];
  [_bookingsVc setTranslationProvider:weakSelf];
  [_bookingsVc setFlowDelegate:weakSelf];
  
  _activeVc = _bookingsVc;
  if ([[[NSUserDefaults standardUserDefaults] valueForKey:@"accessToken"] length] == 0) {
    NoLoggedInViewController *_noLoggedVc = [self.storyboard instantiateViewControllerWithIdentifier:@"noLogged"];
    [[self navigationController] pushViewController:_noLoggedVc animated:YES];
  } else {
    [[self navigationController] pushViewController:_bookingsVc animated:YES];
  }
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
