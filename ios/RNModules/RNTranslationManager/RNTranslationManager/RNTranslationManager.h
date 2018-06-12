#import <Foundation/Foundation.h>

@protocol RNTranslator <NSObject>

- (nonnull NSString *)translate:(nonnull NSString *)key;

@end

@interface RNTranslationManager : NSObject

+ (void)setTranslator:(nullable id<RNTranslator>)translator;

@end
