#import "RNProfileOptions.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNProfileOptions ()

@end

@implementation RNProfileOptions

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
           @"coordinates": @{
               @"latitude" : @59.9139,
               @"longitude": @10.7522
               },
           @"language": @"en",
           @"currency": @"EUR",
           @"dimensions": _dimensions
           };
}

- (NSString *)moduleName {
  return @"Login";
}

- (NSURL *)jsCodeLocation {
  // TODO: Change with bundle
  return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
}

@end
