#import "ViewController.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface ViewController () <RNKiwiOptions, RNKiwiCurrencyManager, RNKiwiTranslationProvider>

@end

@implementation ViewController

- (IBAction)showHotelsView:(id)sender {
  RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithOptions:self];
  [vc setCurrencyFormatter:self];
  [vc setTranslationProvider:self];
  [self presentViewController:vc animated:YES completion:nil];
}

# pragma mark - RNKiwiOptions

- (NSDictionary<NSString *, NSObject *> *)initialProperties {
  return @{
    @"coordinates": @{
      @"latitude" : @59.9139,
      @"longitude": @10.7522
    },
    @"language": @"en",
    @"currency": @"EUR"
  };
}

- (NSString *)moduleName {
  return @"KiwiHotels";
}

# pragma mark - RNKiwiCurrencyManager

- (NSString *)formattedPrice:(NSNumber *)price withCurrency:(NSString *)currencyCode {
  return [[price stringValue] stringByAppendingString:currencyCode];
}

#pragma mark - RNKiwiTranslationProvider

- (NSString *)localizedStringWithKey:(NSString *)key {
  // In real app it would give us the String based on localization
  return nil;
}

@end
