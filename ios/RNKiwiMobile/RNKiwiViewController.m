#import "RNKiwiViewController.h"
#import "RNKiwiOptions.h"

#import <RNNavigator/RNNavigationModule.h>
#import <RNLogging/RNLoggingModule.h>
#import <RNTranslationManager/RNTranslationManager.h>
#import <RNCurrencyManager/RNCurrencyManager.h>
#import <RNColors/RNColors.h>
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
  NSURL *bundleUrl = [_options respondsToSelector:@selector(jsCodeLocation)]
    ? [_options jsCodeLocation]
    : [[NSBundle bundleForClass:[self class]] URLForResource:@"hotels" withExtension:@"jsbundle"];
  
  self.view = [[RCTRootView alloc] initWithBundleURL:bundleUrl
                                          moduleName:[_options moduleName]
                                   initialProperties:[_options initialProperties]
                                       launchOptions:nil];
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

#pragma mark - Gesture controllers observers

- (void)removeGestures {
  if ([self.flowDelegate respondsToSelector:@selector(RNKiwiViewControllerDidStartControllingGestures:)]) {
    [self.flowDelegate RNKiwiViewControllerDidStartControllingGestures:self];
  }
}

- (void)addGestures {
  if ([self.flowDelegate respondsToSelector:@selector(RNKiwiViewControllerDidStopControllingGestures:)]) {
    [self.flowDelegate RNKiwiViewControllerDidStopControllingGestures:self];
  }
}

- (void)startObservingGestures {
  [[NSNotificationCenter defaultCenter]
   addObserver:self
   selector:@selector(removeGestures)
   name:@"RNKiwiRemoveGestures"
   object:[_options moduleName]];
  
  [[NSNotificationCenter defaultCenter]
   addObserver:self
   selector:@selector(addGestures)
   name:@"RNKiwiAddGestures"
   object:[_options moduleName]];
}

- (void)stopObservingGestures {
  [[NSNotificationCenter defaultCenter]
   removeObserver:self
   name:@"RNKiwiAddGestures"
   object:nil];
  
  [[NSNotificationCenter defaultCenter]
   removeObserver:self
   name:@"RNKiwiRemoveGestures"
   object:nil];
}


@end
