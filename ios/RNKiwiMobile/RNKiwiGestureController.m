
#import <Foundation/Foundation.h>
#import "RNKiwiGestureController.h"

NSString *const RNKiwiEnableGestures = @"RNKiwiEnableGestures";
NSString *const RNKiwiDisableGestures = @"RNKiwiDisableGestures";
NSString *const RNKiwiCloseModal = @"RNKiwiCloseModal";

@implementation RNKiwiGestureController

- (instancetype)init {
  static dispatch_once_t pred = 0;
  static id _sharedObject = nil;
  dispatch_once(&pred, ^{
    _sharedObject = [super init];
  });
  return _sharedObject;
}

RCT_EXPORT_MODULE(RNKiwiGestureController);

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

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

RCT_EXPORT_METHOD(closeModal:(NSString *)moduleName) {
  [[NSNotificationCenter defaultCenter] postNotificationName:RNKiwiCloseModal
                                                      object:nil
                                                    userInfo:@{ @"moduleName": moduleName }];
}

RCT_EXPORT_METHOD(invokeDefaultBackButton) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.gestureControllerDelegate invokeDefaultBackButton];
  });
}

+ (void)setGestureControllerDelegate:(id<RNKiwiGestureControllerDelegate>)gestureControllerDelegate {
  [[self new] setGestureControllerDelegate:gestureControllerDelegate];
}

@end
