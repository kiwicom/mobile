//
//  ContainerViewController.h
//  RNNativePlayground
//
//  Created by Radek Pistelak on 11/07/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface ContainerViewController : UIViewController

- (void)setContainedViewController:(UIViewController *)containedViewController withViewOfSize:(CGSize)viewSize;

@end

NS_ASSUME_NONNULL_END
