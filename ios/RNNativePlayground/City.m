#import "City.h"

@implementation City

- (id) initWithName:(NSString *)cityName andId:(NSString *)cityId
{
  self = [super init];
  if (self)
  {
    self.cityName = cityName;
    self.cityId = cityId;
  }
  return self;
}

@end
