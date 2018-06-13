#import <Foundation/Foundation.h>

@protocol RNCurrencyFormatter <NSObject>

- (nonnull NSString *)formatAmount:(nonnull NSNumber *)amount toCurrency:(nonnull NSString *)currency;

@end

@interface RNCurrencyManager : NSObject

+ (void)setCurrencyFormatter:(nullable id<RNCurrencyFormatter>)currencyFormatter;

@end
