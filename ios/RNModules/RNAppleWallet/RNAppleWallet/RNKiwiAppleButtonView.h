#import <PassKit/PassKit.h>
#import <UIKit/UIKit.h>
#import <React/RCTViewManager.h>

@interface RNKiwiAppleButtonView : PKAddPassButton

@property (nonatomic, copy) RCTBubblingEventBlock onPress;

- (instancetype)init;

@end
