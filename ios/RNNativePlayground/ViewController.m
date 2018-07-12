
#import "ViewController.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface ViewController () <UIGestureRecognizerDelegate, RNKiwiOptions, RNKiwiCurrencyManager, RNKiwiTranslationProvider, RNKiwiViewControllerFlowDelegate>

@property (nonatomic, strong) RNKiwiViewController *vc;
@property (nonatomic, strong) NSString *lastNavigationMode;

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

-(void)setUpVC {
  __weak typeof(self) weakSelf = self;
  _vc = [[RNKiwiViewController alloc] initWithOptions:weakSelf];
  [_vc setCurrencyFormatter:weakSelf];
  [_vc setTranslationProvider:weakSelf];
  [_vc setFlowDelegate:weakSelf];
}

- (IBAction)presentHotelsView:(id)sender {
    [self setUpVC];
  
    _lastNavigationMode = @"present";
  
    [[self navigationController] presentViewController:_vc animated:YES completion:nil];
}

- (IBAction)pushHotelsView:(UIButton *)sender {
    [self setUpVC];
  
    _lastNavigationMode = @"push";
    
    [[self navigationController] pushViewController:_vc animated:YES];
}


# pragma mark - RNKiwiOptions

- (NSDictionary<NSString *, NSObject *> *)initialProperties {
  CGRect windowRect = self.view.window.frame;
  return @{
    @"coordinates": @{
        @"latitude" : @59.9139,
        @"longitude": @10.7522
    },
    @"language": @"en",
    @"currency": @"EUR",
    @"lastNavigationMode": _lastNavigationMode,
    @"dimensions": @{
        @"width": @(windowRect.size.width),
        @"height": @(windowRect.size.height)
    }
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
  self.navigationController.interactivePopGestureRecognizer.delegate = self;
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
    return [_vc isInteractivePopGestureAllowed];
  }
  
  return YES;
}

@end
