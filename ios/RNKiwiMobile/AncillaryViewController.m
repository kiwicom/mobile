//
//  AncillaryViewController.m
//  RNKiwiMobile
//
//  Copyright © 2019 Kiwi. All rights reserved.
//

#import "AncillaryViewController.h"
#import "RNKiwiSharedBridge.h"

#import <RNModules/RNLoggingModule.h>
#import <RNModules/RNTranslationManager.h>
#import <RNModules/RNCurrencyManager.h>
#import <RNModules/RNDeviceInfo.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface AncillaryViewController() <RNLogger, RNTranslator, RNCurrencyFormatter>

@property (nonatomic, strong) NSString* serviceName;
@property (nonatomic, strong) NSNumber* bookingId;
@property (nonatomic, strong) NSString* kwAuthToken;

@end

@implementation AncillaryViewController

- (instancetype)init:(NSString *)service bookingId:(NSNumber *)bookingId kwAuthToken:(NSString *)kwAuthToken{
  self = [super init];
  
  if (self) {
    _serviceName = service;
    _bookingId = bookingId;
    _kwAuthToken = kwAuthToken;
    
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
  
  self.view = [[RCTRootView alloc] initWithBridge:[[RNKiwiSharedBridge sharedInstance] bridge]
                                       moduleName: @"AncillaryFactory"
                                initialProperties: @{@"service": _serviceName, @"bookingId": _bookingId, @"kwAuthToken": _kwAuthToken}];
}

@end
