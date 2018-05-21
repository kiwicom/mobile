#import <UIKit/UIKit.h>
#import "RNKiwiCurrencyManager.h"
#import "RNKiwiTranslationProvider.h"
#import "RNKiwiViewControllerFlowDelegate.h"
#import "RNKiwiOptions.h"

@interface RNKiwiViewController: UIViewController

- (nonnull instancetype)initWithOptions:(nonnull id<RNKiwiOptions>)properties;
- (nonnull instancetype)init NS_UNAVAILABLE;

// Delegates
@property (nonatomic, weak, nullable) id<RNKiwiCurrencyManager> currencyFormatter;
@property (nonatomic, weak, nullable) id<RNKiwiTranslationProvider> translationProvider;
@property (nonatomic, weak, nullable) id<RNKiwiViewControllerFlowDelegate> flowDelegate;

// Logging
@property (nonatomic, copy, nullable) void (^didDisplayAncillary)(NSString * _Nonnull type);
@property (nonatomic, copy, nullable) void (^didPurchaseAncillary)(NSString * _Nonnull type);

@end
