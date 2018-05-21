#import <Foundation/Foundation.h>
#import "RNKiwiGestureController.h"

@implementation RNKiwiGestureController

RCT_EXPORT_MODULE(RNKiwiGestureController);

RCT_EXPORT_METHOD(removeGestures:(NSString *)moduleName) {
  [[NSNotificationCenter defaultCenter] postNotificationName:@"RNKiwiRemoveGestures"
                                                      object:moduleName];
}

RCT_EXPORT_METHOD(addGestures:(NSString *)moduleName) {
  [[NSNotificationCenter defaultCenter] postNotificationName:@"RNKiwiAddGestures"
                                                      object:moduleName];
}

@end
