#import "RNKiwiAppleButtonView.h"

@implementation RNKiwiAppleButtonView

- (instancetype)init {
  self = [super initWithAddPassButtonStyle:0];
  if (self) {
    [self addTarget:self
             action:@selector(buttonClicked)
   forControlEvents:UIControlEventTouchUpInside];
  }
  return self;
}

-(void)buttonClicked {
  if (_onPress) {
    _onPress(nil);
  }
}

@end
