#import "RNTranslationManager.h"

#import <React/RCTBridgeModule.h>

@interface RNDummyTranslator: NSObject <RNTranslator>
@end

@implementation RNDummyTranslator

- (NSString *)translate:(NSString *)key {
    return key;
}

@end

@interface RNTranslationManager() <RCTBridgeModule>

@property (nonatomic, strong, nonnull) id<RNTranslator> translator;

@end

@implementation RNTranslationManager

- (instancetype)init {
    static dispatch_once_t pred = 0;
    static id _sharedObject = nil;
    dispatch_once(&pred, ^{
        _sharedObject = [super init];
    });
    return _sharedObject;
}

+ (void)setTranslator:(id<RNTranslator>)translator {
    [[self new] setTranslator:translator];
}

- (BOOL)requiresMainQueueSetup {
    return YES;
}

RCT_EXPORT_MODULE();

- (id<RNTranslator>)translator {
    if (!_translator) {
        return [[RNDummyTranslator alloc] init];
    }
    return _translator;
}

RCT_EXPORT_METHOD(translate:(NSString *)key
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    NSString *translation = [self.translator translate:key];
    resolve(translation);
}

@end
