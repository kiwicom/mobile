#import <Foundation/Foundation.h>
#import "RNLogger.h"

@interface RNLoggingModule : NSObject

+ (void)setLogger:(nullable id<RNLogger>)logger;

@end
