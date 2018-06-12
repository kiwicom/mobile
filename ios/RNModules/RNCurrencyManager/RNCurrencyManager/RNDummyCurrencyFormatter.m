#import "RNDummyCurrencyFormatter.h"

@implementation RNDummyCurrencyFormatter

- (NSNumberFormatter *)formatter {
    static NSNumberFormatter *formatter = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        formatter = [[NSNumberFormatter alloc] init];
        formatter.numberStyle = NSNumberFormatterCurrencyStyle;
        formatter.maximumFractionDigits = 0;
        formatter.paddingPosition = NSNumberFormatterPadAfterPrefix|NSNumberFormatterPadBeforeSuffix;
    });
    return formatter;
}

- (NSUInteger)maximumNumberOfFractionDigitsForCurrency:(NSString *)currencyCode {

    NSSet<NSString *> *decimalSet = [NSSet setWithObjects:
                                     @"aud", @"bhd", @"cad", @"chf", @"eur", @"gbp", @"ils", @"jod", @"kwd", @"myr",
                                     @"nzd", @"omr", @"qar", @"ron", @"sar", @"try", @"usd", @"yer", nil ];

    return [decimalSet containsObject:[currencyCode lowercaseString]] ? 2 : 0;
}

- (NSString *)formatAmount:(NSNumber *)amount toCurrency:(NSString *)currency {

    [self.formatter setCurrencyCode:[currency lowercaseString]];
    [self.formatter setMaximumFractionDigits:[self maximumNumberOfFractionDigitsForCurrency:[currency lowercaseString]]];

    return [self.formatter stringFromNumber:amount];
}

@end

