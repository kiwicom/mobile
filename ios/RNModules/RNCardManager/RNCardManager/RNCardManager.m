#import "RNCardManager.h"

#import <React/RCTBridgeModule.h>

@interface RNDummyCard: NSObject <RNCardContainer>
@end

@implementation RNDummyCard

- (void)saveCard:(NSDictionary *)card {
    [[NSUserDefaults standardUserDefaults] setValue:card
                                             forKey:@"userCard"];
}

- (NSDictionary *)getCard {
    return [[NSUserDefaults standardUserDefaults] valueForKey:@"userCard"];
}

@end

@interface RNCardManager() <RCTBridgeModule>

@property (nonatomic, strong, nonnull) id<RNCardContainer> cardSaver;

@end

@implementation RNCardManager

- (instancetype)init {
    static dispatch_once_t pred = 0;
    static id _sharedObject = nil;
    dispatch_once(&pred, ^{
        _sharedObject = [super init];
    });
    return _sharedObject;
}

+ (void)setCardSaver:(id<RNCardContainer>)cardSaver {
    [[self new] setCardSaver:cardSaver];
}

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (id<RNCardContainer>)cardSaver {
    if (!_cardSaver) {
        return [[RNDummyCard alloc] init];
    }
    return _cardSaver;
}

RCT_EXPORT_METHOD(saveCard:(NSDictionary *)card
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
   [self.cardSaver saveCard:card];
}

RCT_EXPORT_METHOD(getCard:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    NSDictionary *userCard = [self.cardSaver getCard];
    resolve(userCard);
}

@end

