#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol RNLogger <NSObject>

- (void)ancillaryDisplayed:(nullable NSString *)type provider:(nullable NSString *)provider;
- (void)ancillaryPurchased:(nullable NSString *)type provider:(nullable NSString *)provider;

- (void)hotelsResultsDisplayed:(id)additionalInfo;
- (void)hotelsSelectedFilterTag:(NSString *)filterTag;
- (void)hotelsDetailOpened;
- (void)hotelsDetailAbandoned;
- (void)hotelsDetailDescriptionExpanded;
- (void)hotelsDetailMapOpened;
- (void)hotelsDetailRoomSelected:(NSString *)hotelID roomType:(NSString *)roomType;
- (void)hotelsGalleryOpened:(NSString *)type;
- (void)hotelsBookNowPressed:(NSString *)hotelID
                       rooms:(NSNumber *)rooms
                      guests:(NSNumber *)guests
                       price:(NSNumber *)price
              formattedPrice:(NSString *)formattedPrice;

@end

NS_ASSUME_NONNULL_END
