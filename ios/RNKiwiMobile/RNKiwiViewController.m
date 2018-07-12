#import "RNKiwiViewController.h"
#import "RNKiwiOptions.h"
#import "RNKiwiSharedBridge.h"
#import "RNKiwiGestureController.h"

#import <RNModules/RNLoggingModule.h>
#import <RNModules/RNTranslationManager.h>
#import <RNModules/RNCurrencyManager.h>
#import <RNModules/RNDeviceInfo.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface RNKiwiViewController() <RNLogger, RNTranslator, RNCurrencyFormatter, RNKiwiGestureControllerDelegate>

@property (nonatomic, strong) id<RNKiwiOptions> options;
@property (nonatomic) BOOL isGestureAllowed;

@end

@implementation RNKiwiViewController

#pragma mark - Setup

- (instancetype)initWithOptions:(id<RNKiwiOptions>)options {
  self = [super init];
  if (self) {
    _options = options;
    _isGestureAllowed = YES;
    
    [self setupReactWrappersWithObject:self];
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:options];
  }
  
  return self;
}

- (void)setupReactWrappersWithObject:(id)object {
  [RNLoggingModule setLogger:object];
  [RNTranslationManager setTranslator:object];
  [RNKiwiGestureController setGestureControllerDelegate:object];
  [RNCurrencyManager setCurrencyFormatter:object];
  if (object) {
    [self startObservingGestures];
  } else {
    [self stopObservingGestures];
  }
}

#pragma mark - View lifecycle

- (void)loadView {
  self.view = [[RCTRootView alloc] initWithBridge:[[RNKiwiSharedBridge sharedInstance] bridgeForOptions:_options]
                                       moduleName:[_options moduleName]
                                initialProperties:[_options initialProperties]];
}

- (void)viewDidDisappear:(BOOL)animated {
  [super viewDidDisappear:animated];
  
  if ([self isBeingDismissed] || [self isMovingFromParentViewController]) {
    [self notifyFinish];
    [self closeModal];
    [self setupReactWrappersWithObject:nil];
  }
}

#pragma mark - Overriden methods

- (BOOL)prefersStatusBarHidden {
  return NO;
}

- (UIStatusBarStyle)preferredStatusBarStyle {
  return UIStatusBarStyleDefault;
}

- (UIStatusBarAnimation)preferredStatusBarUpdateAnimation {
  return UIStatusBarAnimationFade;
}

#pragma mark - RNLogger

- (void)ancillaryDisplayed:(NSString *)type {
  if ([self didDisplayAncillary]) {
    self.didDisplayAncillary(type);
  }
}

- (void)ancillaryPurchased:(NSString *)type {
  if ([self didPurchaseAncillary]) {
    self.didPurchaseAncillary(type);
  }
}

#pragma mark - RNTranslationManager

- (NSString *)translate:(NSString *)key {
  return [self.translationProvider localizedStringWithKey:key] ?: key;
}

#pragma mark - RNCurrencyManager

- (NSString *)formatAmount:(NSNumber *)amount toCurrency:(NSString *)currency {
  return [self.currencyFormatter formattedPrice:amount withCurrency:currency];
}

#pragma mark - Helpers

- (void)notifyFinish {
  if ([self.flowDelegate respondsToSelector:@selector(RNKiwiViewControllerDidFinish:)]) {
    [self.flowDelegate RNKiwiViewControllerDidFinish:self];
  }
}

#pragma mark - Gesture Controller Observers

- (void)disableGestures:(NSNotification *)notification {
  if ([notification.userInfo[@"moduleName"] isEqualToString:[_options moduleName]]) {
    _isGestureAllowed = NO;
  }
}

- (void)enableGestures:(NSNotification *)notification {
  if ([notification.userInfo[@"moduleName"] isEqualToString:[_options moduleName]]) {
    _isGestureAllowed = YES;
  }
}

- (void)closeModal:(NSNotification *)notification {
  if ([notification.userInfo[@"moduleName"] isEqualToString:[_options moduleName]]) {
     [self dismissViewControllerAnimated:YES completion:nil];
  }
}

- (void)startObservingGestures {
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(disableGestures:)
                                               name:RNKiwiDisableGestures
                                             object:nil];
  
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(enableGestures:)
                                               name:RNKiwiEnableGestures
                                             object:nil];
  
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(closeModal:)
                                               name:RNKiwiCloseModal
                                             object:nil];
}


- (void)stopObservingGestures {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (BOOL)isInteractivePopGestureAllowed {
  return _isGestureAllowed;
}

#pragma mark - Gesture Controller Delegate

- (void)invokeDefaultBackButton {
  [self notifyFinish];
}

- (void)closeModal {
  [self dismissViewControllerAnimated:YES completion:nil];
}

@end
