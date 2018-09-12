#import <Foundation/Foundation.h>

@class RCTBridge;

@interface RNKiwiSharedBridge : NSObject

+ (RNKiwiSharedBridge*)sharedInstance;
- (void)initBridge;
- (RCTBridge *)bridge;

@end
