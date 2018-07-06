#import "RNBookingsOptions.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNBookingsOptions () <RNKiwiOptions>

@property (nonatomic, strong) NSDictionary* dimensions;

@end

@implementation RNBookingsOptions

# pragma mark - RNKiwiOptions

-(id)initWithDimensions:(NSDictionary *)dimensions {
  self = [super init];
  
  if (self) {
    _dimensions = dimensions;
  }
  return self;
}

- (NSDictionary<NSString *, NSObject *> *)initialProperties {
  return @{
    @"currency": @"EUR",
    @"dimensions": _dimensions,
    @"accessToken": @"WyJ2aUZ6NFlQWlMtUmphNnVIVVp3dTZMIiwiT2JvMFBJaC5zQ3JxZnc5bm9NUzRnTzF3TGdvVnBYcTV4RzJ1RU5PR1E5SWpoVHljamVLdDIiLDI2NDk2NDg0NDNd.iOE7KEsrwLbYna3KsFUZl6JsRY4"
  };
}

- (NSString *)moduleName {
  return @"ManageMyBooking";
}

- (NSURL *)jsCodeLocation {
  // TODO: Change with bookings bundle
  return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
}

@end
