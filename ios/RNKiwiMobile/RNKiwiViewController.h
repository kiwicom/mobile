#import <UIKit/UIKit.h>
#import "RNKiwiCurrencyManager.h"
#import "RNKiwiTranslationProvider.h"
#import "RNKiwiViewControllerFlowDelegate.h"

@interface RNKiwiViewController: UIViewController

- (nonnull instancetype)initWithModule:(NSString *)moduleName initialProperties:(NSDictionary*)properties;
- (nonnull instancetype)init NS_UNAVAILABLE;
- (BOOL)isInteractivePopGestureAllowed;

// Delegates
@property (nonatomic, weak, nullable) id<RNKiwiCurrencyManager> currencyFormatter;
@property (nonatomic, weak, nullable) id<RNKiwiTranslationProvider> translationProvider;
@property (nonatomic, weak, nullable) id<RNKiwiViewControllerFlowDelegate> flowDelegate;

// Logging
@property (nonatomic, copy, nullable) void (^didDisplayAncillary)(NSString * _Nonnull type, NSString * _Nonnull provider);
@property (nonatomic, copy, nullable) void (^didPurchaseAncillary)(NSString * _Nonnull type, NSString * _Nonnull provider);

@property (nonatomic, copy, nullable) void (^logHotelsResultsDisplayed)(id _Nonnull info);
@property (nonatomic, copy, nullable) void (^logHotelsFilterTagSet)(id _Nonnull info);
@property (nonatomic, copy, nullable) void (^logHotelsDetailOpened)(void);
@property (nonatomic, copy, nullable) void (^logHotelsDetailAbandoned)(void);
@property (nonatomic, copy, nullable) void (^logHotelsDescriptionExpended)(void);
@property (nonatomic, copy, nullable) void (^logHotelsMapOpened)(void);
@property (nonatomic, copy, nullable) void (^logHotelsRoomSelected)(NSString * _Nonnull hotelID, NSString * _Nonnull roomType);
@property (nonatomic, copy, nullable) void (^logHotelsGalleryOpened)(NSString * _Nonnull type);
@property (nonatomic, copy, nullable) void (^logHotelsBookNowPressed)(NSString * _Nonnull hotelID, NSNumber * _Nonnull rooms, NSNumber * _Nonnull guests, NSNumber * _Nonnull price, NSString * _Nonnull formattedPrice);

@end
