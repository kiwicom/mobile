#import "RNKiwiViewController.h"
#import "RNKiwiOptions.h"
#import "RNKiwiSharedBridge.h"
#import "RNKiwiGestureController.h"

#import <RNNavigator/RNNavigationModule.h>
#import <RNLogging/RNLoggingModule.h>
#import <RNTranslationManager/RNTranslationManager.h>
#import <RNCurrencyManager/RNCurrencyManager.h>
#import <RNDeviceInfo/RNDeviceInfo.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface RNKiwiViewController() <RNNavigationDelegate, RNLogger, RNTranslator, RNCurrencyFormatter>

@property (nonatomic, strong) id<RNKiwiOptions> options;

@end

@implementation RNKiwiViewController

#pragma mark - Setup

- (instancetype)initWithOptions:(id<RNKiwiOptions>)options {
  self = [super init];
  [self startObservingGestures];
  if (self) {
    _options = options;
    
    [self setupReactWrappersWithObject:self];
    
    [[RNKiwiSharedBridge sharedInstance] initBridgeWithOptions:options];
  }
  
  return self;
}

- (void)setupReactWrappersWithObject:(id)object {
  [RNLoggingModule setLogger:object];
  [RNNavigationModule setNavigationDelegate:object];
  [RNTranslationManager setTranslator:object];
  [RNCurrencyManager setCurrencyFormatter:object];
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
    [self setupReactWrappersWithObject:nil];
    [self stopObservingGestures];
  }
}

#pragma mark - Overriden methods

- (BOOL)prefersStatusBarHidden {
  return NO;
}

- (UIStatusBarStyle)preferredStatusBarStyle {
  return UIStatusBarStyleLightContent;
}

- (UIStatusBarAnimation)preferredStatusBarUpdateAnimation {
  return UIStatusBarAnimationFade;
}

#pragma mark - RNNavigation

- (void)userWantsLeaveHotels {
  [self notifyFinish];
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

- (void)disableGestures {
  if ([self.flowDelegate respondsToSelector:@selector(RNKiwiViewControllerDidStartControllingGestures:)]) {
    [self.flowDelegate RNKiwiViewControllerDidStartControllingGestures:self];
  }
}

- (void)enableGestures {
  if ([self.flowDelegate respondsToSelector:@selector(RNKiwiViewControllerDidStopControllingGestures:)]) {
    [self.flowDelegate RNKiwiViewControllerDidStopControllingGestures:self];
  }
}

- (void)startObservingGestures {
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(disableGestures)
                                               name:RNKiwiDisableGestures
                                             object:[_options moduleName]];
  
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(enableGestures)
                                               name:RNKiwiEnableGestures
                                             object:[_options moduleName]];
}

- (void)stopObservingGestures {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}



@end
