#import "RNKiwiAppleButtonView.h"
#import <React/RCTViewManager.h>

@interface RNKiwiAppleWalletManager : RCTViewManager
@end

@implementation RNKiwiAppleWalletManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)

- (UIView *)view
{
  return [RNKiwiAppleButtonView new];
}

@end
