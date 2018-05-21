// Constants file

#import "RNKiwiConstants.h"

@implementation RNKiwiConstants

/**
 * Before adding any new bundle here, first we need to add it in
 * Build Phases -> Bundle React Native dependencies
 */

+ (NSURL *)hotelsBundle {
  return [[NSBundle bundleForClass:[self class]] URLForResource:@"hotels" withExtension:@"jsbundle"];
}

@end
