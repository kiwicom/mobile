#import <Foundation/Foundation.h>

@interface City : NSObject

@property (nonatomic, strong) NSString *cityName;
@property (nonatomic, strong) NSString *cityId;

- (id) initWithName:(NSString *)cityName andId:(NSString *)cityId;

@end
