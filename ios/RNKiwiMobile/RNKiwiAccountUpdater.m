//
//  RNKiwiAccountUpdater.m
//  RNKiwiMobile
//
//  Created by Šimon Javora on 19/11/2019.
//  Copyright © 2019 Kiwi.com. All rights reserved.
//

const NSNotificationName RNKiwiAccountDeletedNotification = @"RNKiwiAccountDeletedNotification";

#import "RNKiwiAccountUpdater.h"

@implementation RNKiwiAccountUpdater

RCT_EXPORT_METHOD(accountDeleted) {
  [[NSNotificationCenter defaultCenter] postNotificationName:RNKiwiAccountDeletedNotification object:nil userInfo:@{}];
}

@end
