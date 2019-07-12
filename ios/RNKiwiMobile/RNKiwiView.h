#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNKiwiView : UIView

- (instancetype)initWithModuleName:(NSString *)moduleName initialProperties:(NSDictionary *)properties;

@end

NS_ASSUME_NONNULL_END
