#import <Foundation/Foundation.h>

@class RCTBridge;

@interface RNKiwiSharedBridge : NSObject

+ (RNKiwiSharedBridge*)sharedInstance;
- (void)initBridge;
- (void)initBridgeWithCodePush:(NSString *)codePushKey;
- (void)initCodePush:(NSString *)codePushKey;
- (RCTBridge *)bridge;


@end
