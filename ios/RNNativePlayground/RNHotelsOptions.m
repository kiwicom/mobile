#import "RNHotelsOptions.h"
#import <RNKiwiMobile/RNKiwiMobile.h>

@interface RNHotelsOptions ()

@end

@implementation RNHotelsOptions

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
  return @"KiwiHotels";
}

- (NSURL *)jsCodeLocation {
  // TODO: Change with hotels bundle
  return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
}

@end
