#import "RNLoggingModule.h"
#import "RNLogger.h"

#import <React/RCTBridgeModule.h>

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

RCT_EXPORT_METHOD(ancillaryDisplayed:(NSString *)type provider:(NSString *)provider) {
    [self.logger ancillaryDisplayed:type provider:provider];
}

RCT_EXPORT_METHOD(ancillaryPurchased:(NSString *)type provider:(NSString *)provider) {
    [self.logger ancillaryPurchased:type provider:provider];
}

RCT_EXPORT_METHOD(hotelsResultsDisplayed:(id)additionalInfo) {
    [self.logger hotelsResultsDisplayed:additionalInfo];
}

RCT_EXPORT_METHOD(hotelsSelectedFilterTag:(NSString *)filterTag) {
    [self.logger hotelsSelectedFilterTag:filterTag];
}

RCT_EXPORT_METHOD(hotelsDetailOpened) {
    [self.logger hotelsDetailOpened];
}

RCT_EXPORT_METHOD(hotelsDetailAbandoned) {
    [self.logger hotelsDetailAbandoned];
}

RCT_EXPORT_METHOD(hotelsDetailDescriptionExpanded) {
    [self.logger hotelsDetailDescriptionExpanded];
}

RCT_EXPORT_METHOD(hotelsDetailMapOpened) {
    [self.logger hotelsDetailMapOpened];
}

RCT_EXPORT_METHOD(hotelsDetailRoomSelected:(NSString *)hotelID roomType:(NSString *)roomType) {
    [self.logger hotelsDetailRoomSelected:hotelID roomType:roomType];
}

RCT_EXPORT_METHOD(hotelsGalleryOpened:(NSString *)type) {
    [self.logger hotelsGalleryOpened:type];
}

RCT_EXPORT_METHOD(hotelsBookNowPressed:(NSString *)hotelID rooms:(NSNumber *)rooms guests:(NSNumber *)guests price:(NSNumber *)price formattedPrice:(NSString *)formattedPrice) {
    [self.logger hotelsBookNowPressed:hotelID rooms:rooms guests:guests price:price formattedPrice:formattedPrice];
}

- (NSDictionary *)constantsToExport
{
    return @{
        @"ANCILLARY_STEP_SEARCH_FORM"     : @"searchForm",
        @"ANCILLARY_STEP_RESULTS"         : @"results",
        @"ANCILLARY_STEP_DETAILS"         : @"details",
        @"ANCILLARY_STEP_PAYMENT"         : @"payment",
        @"ANCILLARY_PROVIDER_BOOKINGCOM"  : @"booking.com",
        @"ANCILLARY_PROVIDER_STAY22"      : @"stay22",
        @"HOTELS_GALLERY_TYPE_HOTEL"      : @"hotel",
        @"HOTELS_GALLERY_TYPE_ROOM"       : @"room"
    };
}

@end
