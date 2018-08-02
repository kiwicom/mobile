#import "RNKiwiAppleButtonView.h"

@implementation RNKiwiAppleButtonView

- (instancetype)initWithAddPassButtonStyle:(PKAddPassButtonStyle)style {
    if (self = [super init]) {
        self.addPassButton = [[PKAddPassButton alloc] initWithAddPassButtonStyle:style];
        self.addPassButton.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
        [self.addPassButton addTarget:self
                               action:@selector(addPassButtonDidTouchUpInside:)
                     forControlEvents:UIControlEventTouchUpInside];
        [super setFrame:self.addPassButton.frame];
        [self addSubview:self.addPassButton];
    }
    
    return self;
}

- (void)addPassButtonDidTouchUpInside:(id)sender {
    if (self.onPress) {
        self.onPress(nil);
    }
}

@end
