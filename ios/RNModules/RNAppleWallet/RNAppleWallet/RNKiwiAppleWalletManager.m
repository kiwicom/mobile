#import "RNKiwiAppleWalletManager.h"
#import "RNKiwiAppleButtonView.h"

@implementation RNKiwiAppleWalletManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)
RCT_EXPORT_METHOD(addPass:(NSString *)url resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSError *downloadingError = nil;
    NSData *data = [NSData dataWithContentsOfURL:[[NSURL alloc] initWithString:url] options:NSDataReadingUncached error:&downloadingError];
    if (downloadingError) {
        reject(@"Network error", [downloadingError localizedDescription], downloadingError);
        return;
    }
    
    NSError *parsingError = nil;
    PKPass *pass = [[PKPass alloc] initWithData:data error:&parsingError];
    if (parsingError) {
        reject(@"Parsing error", [parsingError localizedDescription], parsingError);
        return;
    }
    
    PKPassLibrary *passLib = [PKPassLibrary new];
    
    if (![passLib containsPass:pass]) {
        PKAddPassesViewController *passVc = [[PKAddPassesViewController alloc] initWithPass:pass];
        [RCTPresentedViewController() presentViewController:passVc animated:YES completion:nil];
    }
    resolve(nil);
}

- (UIView *)view
{
    RNKiwiAppleButtonView *button = [[RNKiwiAppleButtonView alloc] initWithAddPassButtonStyle:PKAddPassButtonStyleBlack];
    return button;
}

@end
