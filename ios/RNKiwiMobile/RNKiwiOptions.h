#import <Foundation/Foundation.h>

// Options to configure the RNKiwiViewController
@protocol RNKiwiOptions <NSObject>

/**
 * Initial properties as dictionary to pass to the module
 */
- (NSDictionary<NSString *, NSObject *> *)initialProperties;

/**
 * Name of the React Native module to run from the bundle
 */
- (NSString *)moduleName;

/**
 * Location of the Javascript code to run. You can use localhost (on dev for writing JS)
 * or you can use some of the exposed constants like:
 *
 *  - (NSString *)jsCodeLocation {
 *    return RNKiwiConstants.hotelsBundle;
 *  }
 */
- (NSURL *)jsCodeLocation;

@end
