#import "React/RCTBridgeModule.h"

@protocol RNKiwiGestureControllerDelegate <NSObject>

- (void)invokeDefaultBackButton;

@end

@interface RNKiwiGestureController : NSObject <RCTBridgeModule>

/**
 * We use 
 *
 */
@property (nonatomic, weak, nullable) id<RNKiwiGestureControllerDelegate> gestureControllerDelegate;

+ (void)setGestureControllerDelegate:(id<RNKiwiGestureControllerDelegate>)gestureControllerDelegate;

/**
 * These notifications are called when RN App starts/stop controlling gestures.
 * They are scoped with `moduleName`
 */
RCT_EXTERN NSString *const RNKiwiEnableGestures;

RCT_EXTERN NSString *const RNKiwiDisableGestures;

RCT_EXTERN NSString *const RNKiwiCloseModal;

@end
