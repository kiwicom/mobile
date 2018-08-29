#import <Foundation/Foundation.h>

@protocol RNCardContainer <NSObject>

- (void)saveCard:(nonnull NSDictionary *)card;
- (NSDictionary *)getCard;

@end

@interface RNCardManager : NSObject

+ (void)setCardSaver:(nullable id<RNCardContainer>)cardSaver;

@end
