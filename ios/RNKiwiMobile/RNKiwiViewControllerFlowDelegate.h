@class RNKiwiViewController;

@protocol RNKiwiViewControllerFlowDelegate <NSObject>
@optional
- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController;
- (void)RNKiwiViewControllerDidStartControllingGestures:(nonnull RNKiwiViewController *)viewController;
- (void)RNKiwiViewControllerDidStopControllingGestures:(nonnull RNKiwiViewController *)viewController;

@end
