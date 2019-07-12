#import <Foundation/Foundation.h>

#import "RNKiwiCurrencyManager.h"
#import "RNKiwiTranslationProvider.h"

@class RCTBridge;

NS_ASSUME_NONNULL_BEGIN

@interface RNKiwiSharedBridge : NSObject

+ (RNKiwiSharedBridge*)sharedInstance;
- (void)initBridge;
- (void)initBridgeWithCodePush:(NSString *)codePushKey codePushVersion:(NSString *)codePushVersion;
- (void)initCodePush:(NSString *)codePushKey codePushVersion:(NSString *)codePushVersion;
- (RCTBridge *)bridge;

@property (nonatomic, strong, nullable) id<RNKiwiCurrencyManager> currencyFormatter;
@property (nonatomic, strong, nullable) id<RNKiwiTranslationProvider> translationProvider;

@end

NS_ASSUME_NONNULL_END
