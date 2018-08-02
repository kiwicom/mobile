#import <PassKit/PassKit.h>
#import <React/RCTComponent.h>

@interface RNKiwiAppleButtonView : UIView

- (instancetype)initWithAddPassButtonStyle:(PKAddPassButtonStyle)style;

@property (nonatomic, retain) PKAddPassButton *addPassButton;
@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end
