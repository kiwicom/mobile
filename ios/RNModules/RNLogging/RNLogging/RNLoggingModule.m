#import "RNLoggingModule.h"

#import <React/RCTBridgeModule.h>

@interface RNDummyLogger: NSObject <RNLogger>
@end

@implementation RNDummyLogger

- (void)ancillaryDisplayed:(NSString *)type provider:(NSString *)provider {
    NSLog(@"ancillaryDisplayed - type: %@, - provider: %@", type, provider);
}

- (void)ancillaryPurchased:(NSString *)type  provider:(NSString *)provider{
    NSLog(@"ancillaryPurchased - type: %@, - provider: %@", type, provider);
}

@end

@interface RNLoggingModule() <RCTBridgeModule>

@property (nonatomic, strong, nonnull) id<RNLogger> logger;

@end

@implementation RNLoggingModule

- (instancetype)init {
    static dispatch_once_t pred = 0;
    static id _sharedObject = nil;
    dispatch_once(&pred, ^{
        _sharedObject = [super init];
    });
    return _sharedObject;
}

+ (void)setLogger:(id<RNLogger>)logger {
    [[self new] setLogger:logger];
}

// To export a module named RNLoggingModule
RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (id<RNLogger>)logger {
    if (!_logger) {
        return [[RNDummyLogger alloc] init];
    }
    return _logger;
}

RCT_EXPORT_METHOD(ancillaryDisplayed:(NSString *)type  provider:(NSString *)provider) {
    [self.logger ancillaryDisplayed:type provider:provider];
}

RCT_EXPORT_METHOD(ancillaryPurchased:(NSString *)type provider:(NSString *)provider) {
    [self.logger ancillaryPurchased:type provider:provider];
}

- (NSDictionary *)constantsToExport
{
    return @{ @"ANCILLARY_STEP_SEARCH_FORM" : @"searchForm",
              @"ANCILLARY_STEP_RESULTS"     : @"results",
              @"ANCILLARY_STEP_DETAILS"     : @"details",
              @"ANCILLARY_STEP_PAYMENT"     : @"payment",
              @"ANCILLARY_PROVIDER_BOOKINGCOM"     : @"booking.com",
              @"ANCILLARY_PROVIDER_STAY22"     : @"stay22",
    };
}

@end
