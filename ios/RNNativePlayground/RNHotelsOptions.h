#import <UIKit/UIKit.h>
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNHotelsOptions : UIViewController <RNKiwiOptions>

- (instancetype)initWithParams:(NSDictionary *)dimensions :(NSString *)lastNavigationMode;

@end
