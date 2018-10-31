#import <Foundation/Foundation.h>

@class RCTBridge;

@interface RNKiwiSharedBridge : NSObject

+ (RNKiwiSharedBridge*)sharedInstance;
- (void)initBridge;
- (void)initBridgeWithCodePush:(NSString *)codePushKey codePushVersion:(NSString *)codePushVersion;
- (void)initCodePush:(NSString *)codePushKey codePushVersion:(NSString *)codePushVersion;
- (RCTBridge *)bridge;


@end
