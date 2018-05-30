
#import <Foundation/Foundation.h>
#import "RNKiwiGestureController.h"

NSString *const RNKiwiEnableGestures = @"RNKiwiEnableGestures";
NSString *const RNKiwiDisableGestures = @"RNKiwiDisableGestures";

@implementation RNKiwiGestureController

RCT_EXPORT_MODULE(RNKiwiGestureController);

RCT_EXPORT_METHOD(disableGestures:(NSString *)moduleName) {
  [[NSNotificationCenter defaultCenter] postNotificationName:RNKiwiDisableGestures
                                                      object:nil
                                                    userInfo:@{ @"moduleName": moduleName }];
}

RCT_EXPORT_METHOD(enableGestures:(NSString *)moduleName) {
  [[NSNotificationCenter defaultCenter] postNotificationName:RNKiwiEnableGestures
                                                      object:nil
                                                    userInfo:@{ @"moduleName": moduleName }];
}

@end
