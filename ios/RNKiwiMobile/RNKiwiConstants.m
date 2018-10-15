// Constants file

#import "RNKiwiConstants.h"
#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>

@implementation RNKiwiConstants

+ (NSURL *)bundleURL {
  #if DEBUG
    return [NSURL URLWithString:@"http://localhost:8081/app/native.bundle?platform=ios&dev=true"];
  #else
   return [CodePush bundleURLForResource:@"main" withExtension:@"jsbundle" subdirectory:nil bundle:[NSBundle bundleWithIdentifier:@"com.kiwi.RNKiwiMobile"]];
  #endif
}

@end
