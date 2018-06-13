#import <XCTest/XCTest.h>
#import "RNDummyCurrencyFormatter.h"

@interface RNCurrencyManagerTests : XCTestCase

@property (nonatomic, strong) RNDummyCurrencyFormatter *formatter;

@end

@implementation RNCurrencyManagerTests

- (void)setUp {
    [super setUp];
    self.formatter = [[RNDummyCurrencyFormatter alloc] init];
}

- (void)test_formatToEURos {

    XCTAssertEqualObjects(
        @"€123.00", // depends on locale...
        [self.formatter formatAmount:@(123) toCurrency:@"EUR"]
    );
}


@end
