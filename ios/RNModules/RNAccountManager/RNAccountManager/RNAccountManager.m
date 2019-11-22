//
//  RNKiwiAccountUpdater.m
//  RNKiwiMobile
//
//  Created by Šimon Javora on 19/11/2019.
//  Copyright © 2019 Kiwi.com. All rights reserved.
//

#import "RNAccountManager.h"

const NSNotificationName RNKiwiAccountDeletedNotification = @"RNKiwiAccountDeletedNotification";



@implementation RNAccountManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(accountDeleted) {
  [[NSNotificationCenter defaultCenter] postNotificationName:RNKiwiAccountDeletedNotification object:nil userInfo:@{}];
}

@end
