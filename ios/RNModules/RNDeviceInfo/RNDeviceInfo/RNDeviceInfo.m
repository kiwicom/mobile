#import "RNDeviceInfo.h"
#import <React/RCTBridgeModule.h>

@implementation RNDeviceInfo

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSString *)currentLanguage {
    
    NSString *localeIdentifier = [[[[NSLocale preferredLanguages] firstObject] componentsSeparatedByString:@"-"] firstObject];
    
    if (localeIdentifier == nil) {
        NSLog(@"RNDeviceInfo: current language is undefined");
    }
    
    return localeIdentifier ?: @"en";
}

- (NSString *)currentTerritory {
    
    NSString *localeIdentifier = [[NSLocale currentLocale] objectForKey: NSLocaleCountryCode];
    
    if (localeIdentifier == nil) {
        NSLog(@"RNDeviceInfo: current country code is undefined");
    }
    
    return localeIdentifier ?: @"US";
}

- (NSDictionary *)constantsToExport {

    return @{
             @"getLanguage": [self currentLanguage],
             @"getTerritory": [self currentTerritory],
             @"getLocaleUnderscored": [NSString stringWithFormat:@"%@_%@", [self currentLanguage], [self currentTerritory]],
             @"getLocaleDashed": [NSString stringWithFormat:@"%@-%@", [self currentLanguage], [self currentTerritory]]
            };
}

@end
