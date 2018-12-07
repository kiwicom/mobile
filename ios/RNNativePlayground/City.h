#import <Foundation/Foundation.h>

@interface City : NSObject

@property (nonatomic, strong) NSString *cityName;
@property (nonatomic, strong) NSString *cityId;
@property (nonatomic, strong) NSDictionary *cityCoordinates;

- (id) initWithName:(NSString *)cityName andId:(NSString *)cityId andCoordinates:(NSDictionary *)cityCoordinates;

@end
