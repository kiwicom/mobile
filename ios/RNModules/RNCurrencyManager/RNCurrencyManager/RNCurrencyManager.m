#import "RNCurrencyManager.h"
#import "RNDummyCurrencyFormatter.h"

#import <React/RCTBridgeModule.h>

@interface RNDummyCurrencyFormatter() <RNCurrencyFormatter>

@end

@interface RNCurrencyManager() <RCTBridgeModule>

@property (nonatomic, strong, nonnull) id<RNCurrencyFormatter> formatter;

@end

@implementation RNCurrencyManager

- (instancetype)init {
    static dispatch_once_t pred = 0;
    static id _sharedObject = nil;
    dispatch_once(&pred, ^{
        _sharedObject = [super init];
    });
    return _sharedObject;
}

+ (void)setCurrencyFormatter:(id<RNCurrencyFormatter>)currencyFormatter {
    [[self new] setFormatter:currencyFormatter];
}

- (BOOL)requiresMainQueueSetup {
    return YES;
}

RCT_EXPORT_MODULE();

- (id<RNCurrencyFormatter>)formatter {
    if (!_formatter) {
        return [[RNDummyCurrencyFormatter alloc] init];
    }
    return _formatter;
}

RCT_EXPORT_METHOD(formatAmount:(nonnull NSNumber *)amountInEUR toCurrency:(NSString *)currency
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    NSString *formattedAmount = [[self formatter] formatAmount:amountInEUR toCurrency:currency];
    resolve(formattedAmount);
}

@end
