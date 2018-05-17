@protocol RNKiwiCurrencyManager <NSObject>

- (nonnull NSString *)formattedPrice:(nonnull NSNumber *)price withCurrency:(nullable NSString *)currencyCode;

@end
