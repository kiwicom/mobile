@class RNKiwiViewController;

@protocol RNKiwiViewControllerFlowDelegate <NSObject>
@optional
- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController;

@end
