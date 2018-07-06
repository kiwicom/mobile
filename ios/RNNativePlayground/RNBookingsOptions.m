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
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  NSString *accessToken = [defaults valueForKey:@"accessToken"];
  
  return @{
    @"currency": @"EUR",
    @"dimensions": _dimensions,
    @"accessToken": accessToken,
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
