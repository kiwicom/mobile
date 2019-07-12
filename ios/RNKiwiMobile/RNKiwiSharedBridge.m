#import "RNKiwiSharedBridge.h"
#import "RNKiwiConstants.h"
#import <React/RCTBridge.h>
#import <React/RCTRootView.h>
#import <CodePush/CodePush.h>

#import <RNModules/RNTranslationManager.h>
#import <RNModules/RNCurrencyManager.h>

@interface RNKiwiSharedBridge() <RNTranslator, RNCurrencyFormatter>

@property (nonatomic, strong) RCTBridge* bridge;

@end

@implementation RNKiwiSharedBridge

+ (id)sharedInstance {
  static dispatch_once_t pred = 0;
  __strong static id _sharedObject = nil;
  dispatch_once(&pred, ^{
    _sharedObject = [[self alloc] init];
  });
  return _sharedObject;
}

- (void)initBridgeWithCodePush:(NSString *)codePushKey codePushVersion:(NSString *)codePushVersion {
  [CodePush overrideAppVersion:codePushVersion];
  [CodePush setDeploymentKey:codePushKey];
  [self initBridge];
}

- (void)initCodePush:(NSString *)codePushKey codePushVersion:(NSString *)codePushVersion {
  [CodePush overrideAppVersion:codePushVersion];
  [CodePush setDeploymentKey:codePushKey];
}

- (void)setupReactWrappers {
  [RNTranslationManager setTranslator:self];
  [RNCurrencyManager setCurrencyFormatter:self];
}

- (void)initBridge {
  if (!_bridge) {
    _bridge = [[RCTBridge alloc] initWithBundleURL:[RNKiwiConstants bundleURL] moduleProvider:nil launchOptions:nil];

    [self setupReactWrappers];
  }  
}

- (RCTBridge *)bridge {
  if (!_bridge) {
    [self initBridge];
  }
  return _bridge;
}

#pragma mark - RNTranslationManager

- (NSString *)translate:(NSString *)key {
  return [self.translationProvider localizedStringWithKey:key] ?: key;
}

#pragma mark - RNCurrencyManager

- (NSString *)formatAmount:(NSNumber *)amount toCurrency:(NSString *)currency {
  return [self.currencyFormatter formattedPrice:amount withCurrency:currency];
}

@end
