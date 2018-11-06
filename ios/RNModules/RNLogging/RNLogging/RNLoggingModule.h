#import <Foundation/Foundation.h>

@protocol RNLogger <NSObject>

- (void)ancillaryDisplayed:(nullable NSString *)type provider:(nullable NSString *)provider;
- (void)ancillaryPurchased:(nullable NSString *)type provider:(nullable NSString *)provider;

@end

@interface RNLoggingModule : NSObject

+ (void)setLogger:(nullable id<RNLogger>)logger;

@end
