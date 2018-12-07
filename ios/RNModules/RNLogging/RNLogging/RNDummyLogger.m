#import "RNDummyLogger.h"

@implementation RNDummyLogger

- (void)ancillaryDisplayed:(nullable NSString *)type provider:(nullable NSString *)provider {

}

- (void)ancillaryPurchased:(nullable NSString *)type provider:(nullable NSString *)provider {

}

- (void)hotelsDetailAbandoned {

}

- (void)hotelsDetailDescriptionExpanded {

}

- (void)hotelsDetailMapOpened {

}

- (void)hotelsDetailOpened {

}

- (void)hotelsDetailRoomSelected:(nonnull NSString *)hotelID roomType:(nonnull NSString *)roomType {

}

- (void)hotelsGalleryOpened:(nonnull NSString *)type {

}

- (void)hotelsResultsDisplayed:(nullable NSString *)searchQuery params:(nullable NSString *)parameters {

}

- (void)hotelsSelectedFilterTag:(nonnull NSString *)filterTag {

}

- (void)hotelsBookNowPressed:(nonnull NSString *)hotelID
                       rooms:(nonnull NSNumber *)rooms
                      guests:(nonnull NSNumber *)guests
                       price:(nonnull NSNumber *)price
              formattedPrice:(nonnull NSString *)formattedPrice {

}

@end
