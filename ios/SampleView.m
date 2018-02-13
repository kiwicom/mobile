#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import "SampleView.h"

#import <RNLogging/RNLoggingModule.h>

@interface RCT_EXTERN_MODULE(SampleViewManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(text, NSString)
@end
