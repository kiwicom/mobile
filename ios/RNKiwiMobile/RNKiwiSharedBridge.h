#import <Foundation/Foundation.h>
#import "RNKiwiOptions.h"

@class RCTBridge;

@interface RNKiwiSharedBridge : NSObject

+ (RNKiwiSharedBridge*)sharedInstance;
- (void)initBridgeWithOptions:(id<RNKiwiOptions>)options;
- (RCTBridge *)bridgeForOptions:(id<RNKiwiOptions>)options;

@end
