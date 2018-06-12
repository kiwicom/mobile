#import <Foundation/Foundation.h>

@interface RNDummyCurrencyFormatter : NSObject

- (nonnull NSString *)formatAmount:(nonnull NSNumber *)amount toCurrency:(nonnull NSString *)currency;

@end
