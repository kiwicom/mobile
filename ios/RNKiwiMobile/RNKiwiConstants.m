// Constants file

#import "RNKiwiConstants.h"
#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>

@implementation RNKiwiConstants

+ (NSURL *)bundleURL {
#ifdef DEBUG
  // A build script injects your local IP address as the MetroBundlerAddress, this greatly improves DX for using this app on device, and also works with emulators
  NSString *localIP = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"MetroBundlerAddress"];
  NSString *metroBundlerUrl = [NSString stringWithFormat:@"http://%@:8081/app/native.bundle?platform=ios&dev=true", localIP];
  return [NSURL URLWithString: metroBundlerUrl];
#else
  return [CodePush bundleURLForResource:@"main" withExtension:@"jsbundle" subdirectory:nil bundle:[NSBundle bundleWithIdentifier:@"com.kiwi.RNKiwiMobile"]];
#endif
}



@end
