//
//  AncillarySharedBridge.m
//  RNKiwiMobile
//
//  Copyright © 2019 Kiwi. All rights reserved.
//

#import "AncillarySharedBridge.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>

@interface AncillarySharedBridge()

@property (nonatomic, strong) RCTBridge* bridge;

@end

@implementation AncillarySharedBridge

+ (id)sharedInstance {
  static dispatch_once_t pred = 0;
  __strong static id _sharedObject = nil;
  dispatch_once(&pred, ^{
    _sharedObject = [[self alloc] bridge];
  });
  return _sharedObject;
}

- (void)initBridge {
  if (!_bridge) {
    _bridge = [[RCTBridge alloc] initWithBundleURL:[self bundleURL] moduleProvider:nil launchOptions:nil];
  }
}

- (RCTBridge *)bridge {
  if (!_bridge) {
    [self initBridge];
  }
  
  return _bridge;
}

- (NSURL *)bundleURL {
  #ifdef DEBUG
     return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//    return [NSURL URLWithString:@"http://localhost:8081/app/native.bundle?platform=ios&dev=true"];
  #else
    return [CodePush bundleURLForResource:@"main" withExtension:@"jsbundle" subdirectory:nil bundle:[NSBundle bundleWithIdentifier:@"com.kiwi.RNKiwiMobile"]];
  #endif
}


@end
