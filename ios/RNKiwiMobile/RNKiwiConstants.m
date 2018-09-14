// Constants file

#import "RNKiwiConstants.h"
#import <React/RCTBundleURLProvider.h>

@implementation RNKiwiConstants

+ (NSURL *)bundleURL {
// To run with packager comment line #10 and uncomment line #11
  return [[NSBundle bundleForClass:[self class]] URLForResource:@"main" withExtension:@"jsbundle"];
//  return [NSURL URLWithString:@"http://localhost:8081/app/native.bundle?platform=ios&dev=true"];
}

@end
