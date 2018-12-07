#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNMessageLogger: NSProxy

- (instancetype)initWithTarget:(id)target;

@end

NS_ASSUME_NONNULL_END
