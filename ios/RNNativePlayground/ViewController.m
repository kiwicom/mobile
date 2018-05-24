#import "ViewController.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface ViewController () <RNKiwiOptions, RNKiwiCurrencyManager, RNKiwiTranslationProvider, RNKiwiViewControllerFlowDelegate>

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
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:self];
  }
  return self;
}

- (IBAction)showHotelsView:(id)sender {
  RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithOptions:self];
  [vc setCurrencyFormatter:self];
  [vc setTranslationProvider:self];
  [vc setFlowDelegate:self];
  
  [[self navigationController] pushViewController:vc animated:YES ];
}

# pragma mark - RNKiwiOptions

- (NSDictionary<NSString *, NSObject *> *)initialProperties {
  return @{
           @"coordinates": @{
               @"latitude" : @59.9139,
               @"longitude": @10.7522
               },
           @"language": @"en",
           @"currency": @"EUR"
           };
}

- (NSString *)moduleName {
  return @"KiwiHotels";
}

- (NSURL *)jsCodeLocation {
  return RNKiwiConstants.hotelsBundle;
}

- (void)viewDidAppear:(BOOL)animated {
  self.navigationController.navigationBar.hidden = YES;
}

# pragma mark - RNKiwiViewControllerFlowDelegate

- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController {
  [self.navigationController popViewControllerAnimated:YES];
}

- (void)RNKiwiViewControllerDidStartControllingGestures:(nonnull RNKiwiViewController *)viewController {
  self.navigationController.interactivePopGestureRecognizer.enabled = NO;
}

- (void)RNKiwiViewControllerDidStopControllingGestures:(nonnull RNKiwiViewController *)viewController {
  self.navigationController.interactivePopGestureRecognizer.enabled = YES;
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

@end
