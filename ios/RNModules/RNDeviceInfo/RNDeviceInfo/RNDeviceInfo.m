#import "RNDeviceInfo.h"
#import <React/RCTBridgeModule.h>

@implementation RNDeviceInfo

RCT_EXPORT_MODULE();

- (NSString *)currentLanguage {

    NSString *localeIdentifier = [[NSLocale preferredLanguages] firstObject];

    if (localeIdentifier == nil) {
        NSLog(@"RNDeviceInfo: current locale is undefined");
    }

    return localeIdentifier ?: @"en-US";
}

- (NSDictionary *)constantsToExport {

    return @{
        @"Locale": [self currentLanguage],
    };
}

@end
