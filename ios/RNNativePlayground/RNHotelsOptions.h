#import <UIKit/UIKit.h>
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNHotelsOptions : UIViewController <RNKiwiOptions>

- (instancetype)initWithDimensions:(NSDictionary *)dimensions;
@property (nonatomic, weak, nullable) NSDictionary* dimensions;

@end

