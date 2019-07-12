#import "RNKiwiView.h"

#import <React/RCTRootView.h>
#import "RNKiwiSharedBridge.h"

@interface RNKiwiView()

@property (nonatomic, strong) UIView *embeddedRNView;

@end

@implementation RNKiwiView

- (instancetype)initWithModuleName:(nonnull NSString *)moduleName initialProperties:(nonnull NSDictionary *)properties {
  self = [super init];
  if (self) {

    _embeddedRNView = [[RCTRootView alloc] initWithBridge:[[RNKiwiSharedBridge sharedInstance] bridge]
                                               moduleName:moduleName
                                        initialProperties:properties];

    [self addSubview:_embeddedRNView];
  }

  return self;
}

- (void)layoutSubviews {
  [super layoutSubviews];
  _embeddedRNView.frame = self.bounds;
}

@end
