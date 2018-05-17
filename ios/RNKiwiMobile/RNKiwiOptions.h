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

@optional
/**
 * Optional location of the Javascript code to run. Do not provide this in production
 * mode
 */
- (NSURL *)jsCodeLocation;

@end

