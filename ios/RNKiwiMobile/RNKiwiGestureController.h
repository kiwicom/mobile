#import "React/RCTBridgeModule.h"

@interface RNKiwiGestureController : NSObject <RCTBridgeModule>

/**
 * These notifications are called when RN App starts/stop controlling gestures.
 * They are scoped with `moduleName`
 */
RCT_EXTERN NSString *const RNKiwiEnableGestures;

RCT_EXTERN NSString *const RNKiwiDisableGestures;

@end
