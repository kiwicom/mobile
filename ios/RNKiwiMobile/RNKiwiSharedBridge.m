#import "RNKiwiSharedBridge.h"
#import "RNKiwiOptions.h"
#import <React/RCTBridge.h>
#import <React/RCTRootView.h>

@interface RNKiwiSharedBridge()

@property (nonatomic, strong) NSMutableDictionary<NSString*,RCTBridge*> *bridges;

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

- (instancetype)init {
  self = [super init];
  if (self) {
    _bridges = [NSMutableDictionary new];
  }
  return self;
}

- (NSURL *)resolveBundleURL:(id<RNKiwiOptions>)options {
  return [options jsCodeLocation];
}

- (NSString *)keyFromURL:(NSURL *)url {
  return [url absoluteString];
}

- (void)initBridgeWithOptions:(id<RNKiwiOptions>)options {
  NSURL *url = [self resolveBundleURL:options];
  NSString *key = [self keyFromURL:url];
  
  if (!_bridges[key]) {
    _bridges[key] = [[RCTBridge alloc] initWithBundleURL:url moduleProvider:nil launchOptions:nil];
  }  
}

- (RCTBridge *)bridgeForOptions:(id<RNKiwiOptions>)options {
  NSString *key = [self keyFromURL:[self resolveBundleURL:options]];
  return _bridges[key];
}

@end
