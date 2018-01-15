// This file exposes our CalendarManager.swift to react native application
#import <Foundation/Foundation.h>


#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MyNativeModuleManager, NSObject)

RCT_EXTERN_METHOD(communicate:(NSString *)firstString secondString:(NSString *)secondString number:(nonnull NSNumber *)date callback: (RCTResponseSenderBlock)callback)

@end
