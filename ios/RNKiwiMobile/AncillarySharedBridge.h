//
//  AncillarySharedBridge.h
//  RNKiwiMobile
//
//  Copyright © 2019 Kiwi. All rights reserved.
//

#import <Foundation/Foundation.h>

@class RCTBridge;

@interface AncillarySharedBridge : NSObject

+ (AncillarySharedBridge *)sharedInstance;
- (void) initBridge;
- (RCTBridge *)bridge;

@end
