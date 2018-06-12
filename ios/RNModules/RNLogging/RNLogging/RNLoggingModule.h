#import <Foundation/Foundation.h>

@protocol RNLogger <NSObject>

- (void)ancillaryDisplayed:(nullable NSString *)type;
- (void)ancillaryPurchased:(nullable NSString *)type;

@end

@interface RNLoggingModule : NSObject

+ (void)setLogger:(nullable id<RNLogger>)logger;

@end
