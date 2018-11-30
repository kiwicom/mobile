#import "City.h"

@implementation City

- (id) initWithName:(NSString *)cityName andId:(NSString *)cityId andCoordinates:(NSDictionary *)cityCoordinates;
{
  self = [super init];
  if (self)
  {
    self.cityName = cityName;
    self.cityId = cityId;
    self.cityCoordinates = cityCoordinates;
  }
  return self;
}

@end
