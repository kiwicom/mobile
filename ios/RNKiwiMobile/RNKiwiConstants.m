// Constants file

#import "RNKiwiConstants.h"
#import <React/RCTBundleURLProvider.h>

@implementation RNKiwiConstants

+ (NSURL *)bundleURL {
  #if DEBUG
    return [NSURL URLWithString:@"http://localhost:8081/app/native.bundle?platform=ios&dev=true"];
  #else
    return [[NSBundle bundleForClass:[self class]] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif
}

@end
