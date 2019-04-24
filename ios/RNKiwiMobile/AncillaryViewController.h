//
//  AncillaryViewController.h
//  RNKiwiMobile
//
//  Copyright © 2019 Kiwi. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RNKiwiCurrencyManager.h"
#import "RNKiwiTranslationProvider.h"

@interface AncillaryViewController : UIViewController

- (nonnull instancetype)init:(NSString *)serviceName bookingId:(NSNumber *)bookingId kwAuthToken:(NSString *)kwAuthToken;

// Delegates
@property(nonatomic, weak, nullable) id<RNKiwiCurrencyManager> currencyFormatter;
@property(nonatomic, weak, nullable) id<RNKiwiTranslationProvider> translationProvider;

@end
