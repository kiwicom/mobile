@class RNKiwiViewController;

@protocol RNKiwiViewControllerFlowDelegate <NSObject>

- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController;

@end
