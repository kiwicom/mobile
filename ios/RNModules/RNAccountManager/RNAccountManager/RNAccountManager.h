//
//  RNKiwiAccountUpdater.h
//  RNKiwiMobile
//
//  Created by Šimon Javora on 19/11/2019.
//  Copyright © 2019 Kiwi.com. All rights reserved.
//

@import Foundation;
#import "React/RCTBridgeModule.h"

RCT_EXTERN const NSNotificationName _Nonnull RNKiwiAccountDeletedNotification;

@interface RNAccountManager : NSObject <RCTBridgeModule>

@end
