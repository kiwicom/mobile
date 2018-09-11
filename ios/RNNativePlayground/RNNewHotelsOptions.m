#import "RNNewHotelsOptions.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNNewHotelsOptions ()

@property (nonatomic, strong) NSDictionary* dimensions;
@property (nonatomic, strong) NSString* lastNavigationMode;

@end

@implementation RNNewHotelsOptions

# pragma mark - RNNewHotelsOptions

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
           @"bookingComAffiliate": @"123456",
           @"language": @"en",
           @"currency": @"EUR",
           @"lastNavigationMode": _lastNavigationMode,
           @"dimensions": _dimensions,
           @"checkin": @"2018-09-20",
           @"checkout": @"2018-09-22",
           @"version": @"3.7.13-9d55ad66",
           @"cityName": @"Barcelona",
           @"cityId": @"aG90ZWxDaXR5Oi0zNzI0OTA=",
           @"roomsConfiguration": @[
               @{
                 @"adultsCount": @1,
                 @"children": @[
                     @{
                       @"age": @2
                     }
                 ]}
           ]
  };
}

- (NSString *)moduleName {
  return @"NewKiwiHotels";
}

- (NSURL *)jsCodeLocation {
  return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
}

@end
