#import "RNLoggingModule.h"

#import <React/RCTBridgeModule.h>

@interface RNDummyLogger: NSObject <RNLogger>
@end

@implementation RNDummyLogger

- (void)ancillaryDisplayed:(NSString *)type {
    NSLog(@"ancillaryDisplayed - type: %@", type);
}

- (void)ancillaryPurchased:(NSString *)type {
    NSLog(@"ancillaryPurchased - type: %@", type);
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

- (BOOL)requiresMainQueueSetup {
    return YES;
}

// To export a module named RNLoggingModule
RCT_EXPORT_MODULE();

- (id<RNLogger>)logger {
    if (!_logger) {
        return [[RNDummyLogger alloc] init];
    }
    return _logger;
}

RCT_EXPORT_METHOD(ancillaryDisplayed:(NSString *)type) {
    [self.logger ancillaryDisplayed:type];
}

RCT_EXPORT_METHOD(ancillaryPurchased:(NSString *)type) {
    [self.logger ancillaryPurchased:type];
}

- (NSDictionary *)constantsToExport
{
    return @{ @"ANCILLARY_STEP_SEARCH_FORM" : @"searchForm",
              @"ANCILLARY_STEP_RESULTS"     : @"results",
              @"ANCILLARY_STEP_DETAILS"     : @"details",
              @"ANCILLARY_STEP_PAYMENT"     : @"payment",
    };
}

@end
