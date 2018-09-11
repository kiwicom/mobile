#import "RNHotelsOptions.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNHotelsOptions ()

@property (nonatomic, strong) NSDictionary* dimensions;
@property (nonatomic, strong) NSString* lastNavigationMode;

@end

@implementation RNHotelsOptions

# pragma mark - RNHotelsOptions

-(id)initWithParams:(NSDictionary *)dimensions :(NSString *)lastNavigationMode {
  self = [super init];
  if (self) {
    _dimensions = dimensions;
    _lastNavigationMode = lastNavigationMode;
  }
  return self;
}

- (NSDictionary<NSString *, NSObject *> *)initialProperties {
  return @{
           @"coordinates": @{
               @"latitude" : @59.9139,
               @"longitude": @10.7522
           },
           @"language": @"en",
           @"currency": @"EUR",
           @"lastNavigationMode": _lastNavigationMode,
           @"dimensions": _dimensions
  };
}

- (NSString *)moduleName {
  return @"KiwiHotels";
}

- (NSURL *)jsCodeLocation {
  return RNKiwiConstants.hotelsBundle;
}

@end
