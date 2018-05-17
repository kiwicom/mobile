//
//  RNHotelsViewController.h
//  RNHotels
//
//  Created by Radek Pistelak on 07/02/2018.
//  Copyright © 2018 Kiwi.com. All rights reserved.
//

#import <UIKit/UIKit.h>

@class RNHotelsViewController;
@protocol RNHotelsInitialProperties;

@protocol RNHotelsViewControllerFlowDelegate <NSObject>

- (void)RNHotelsViewControllerDidFinish:(nonnull RNHotelsViewController *)viewController;

@end

@protocol RNCurrencyManager <NSObject>

- (nonnull NSString *)formattedPrice:(nonnull NSNumber *)price withCurrency:(nullable NSString *)currencyCode;

@end

@protocol RNTranslationProvider <NSObject>

- (nonnull NSString *)localizedStringWithKey:(nonnull NSString *)key;

@end

@interface RNHotelsViewController: UIViewController

- (nonnull instancetype)initWithInitialInitialProperties:(nonnull id<RNHotelsInitialProperties>)properties;
- (nonnull instancetype)init NS_UNAVAILABLE;

@property (nonatomic, weak, nullable) id<RNCurrencyManager> currencyFormatter;
@property (nonatomic, weak, nullable) id<RNTranslationProvider> translationProvider;

// Logging

@property (nonatomic, copy, nullable) void (^didDisplayAncillary)(NSString * _Nonnull type);
@property (nonatomic, copy, nullable) void (^didPurchaseAncillary)(NSString * _Nonnull type);

// Flow

@property (nonatomic, weak, nullable) id<RNHotelsViewControllerFlowDelegate> flowDelegate;

@end
