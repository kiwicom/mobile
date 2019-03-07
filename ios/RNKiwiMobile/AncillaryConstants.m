//
//  AncillaryConstants.m
//  RNKiwiMobile
//
//  Copyright © 2019 Kiwi. All rights reserved.
//

#import "AncillaryConstants.h"
#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>

@implementation AncillaryConstants

+ (NSURL *)bundleURL {
#ifdef DEBUG
  return [NSURL URLWithString:@"http://localhost:8081/app/native.bundle?platform=ios&dev=true"];
#else
  return [CodePush bundleURLForResource:@"ancillaries" withExtension:@"jsbundle" subdirectory:nil bundle:[NSBundle bundleWithIdentifier:@"com.kiwi.RNKiwiMobile"]];
#endif
}

+ (NSString *)codePushAppVersion {
  return @"1.0.0";
}

@end
