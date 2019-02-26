//
//  AncillaryViewController.m
//  RNKiwiMobile
//
//  Copyright © 2019 Kiwi. All rights reserved.
//

#import "AncillaryViewController.h"
#import "AncillarySharedBridge.h"

#import <RNModules/RNLoggingModule.h>
#import <RNModules/RNTranslationManager.h>
#import <RNModules/RNCurrencyManager.h>
#import <RNModules/RNDeviceInfo.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface AncillaryViewController() <RNLogger, RNTranslator, RNCurrencyFormatter>

@property (nonatomic, strong) NSString* serviceName;
@property (nonatomic, strong) NSNumber* bookingId;

@end

@implementation AncillaryViewController

- (instancetype)init:(NSString *)serviceName bookingId:(NSNumber *)bookingId {
  self = [super init];
  
  if (self) {
    _serviceName = serviceName;
    _bookingId = bookingId;
    
    [self setupReactWrappersWithObject:self];
    [self loadView];
  }
  
  return self;
}

- (void)setupReactWrappersWithObject:(id)object {
  [RNLoggingModule setLogger:object];
  [RNTranslationManager setTranslator:object];
  [RNCurrencyManager setCurrencyFormatter:object];
}

- (void)loadView {
  
  self.view = [[RCTRootView alloc] initWithBridge:[[AncillarySharedBridge sharedInstance] bridge]
                                       moduleName:_serviceName
                                initialProperties: @{@"bookingId": _bookingId}];
}

@end
