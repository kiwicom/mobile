#import "RNKiwiSharedBridge.h"
#import "RNKiwiConstants.h"
#import <React/RCTBridge.h>
#import <React/RCTRootView.h>

@interface RNKiwiSharedBridge()

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

- (void)initBridge {
  if (!_bridge) {
    _bridge = [[RCTBridge alloc] initWithBundleURL:[RNKiwiConstants bundleURL] moduleProvider:nil launchOptions:nil];
  }  
}

- (RCTBridge *)bridge {
  if (!_bridge) {
    [self initBridge];
  }
  return _bridge;
}

@end
