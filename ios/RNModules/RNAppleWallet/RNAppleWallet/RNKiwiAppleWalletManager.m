#import "RNKiwiAppleWalletManager.h"
#import "RNKiwiAppleButtonView.h"

@implementation RNKiwiAppleWalletManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)

- (UIView *)view
{
    RNKiwiAppleButtonView *button = [[RNKiwiAppleButtonView alloc] initWithAddPassButtonStyle:PKAddPassButtonStyleBlack];
    return button;
}

@end
