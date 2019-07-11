//
//  ContainerViewController.m
//  RNNativePlayground
//
//  Created by Radek Pistelak on 11/07/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ContainerViewController.h"

@interface ContainerView: UIView

@property (nonatomic, strong) UIView *containedView;
@property (nonatomic, assign) CGSize preferredSizeOfContainedView;

@end

@implementation ContainerView

- (instancetype)init {
  self = [super init];
  if (self) {
    [self setBackgroundColor:[UIColor redColor]];
  }
  return self;
}

- (void)setContainedView:(UIView *)containedView withPreferedSize:(CGSize)preferredSize {
  [_containedView removeFromSuperview];
  _containedView = containedView;
  _preferredSizeOfContainedView = preferredSize;
  [self addSubview:containedView];
  [self setNeedsLayout];
}

- (void)layoutSubviews {
  [super layoutSubviews];

  const CGFloat kSpacing = 16;

  const UIEdgeInsets containedViewInsets = UIEdgeInsetsMake(2 * kSpacing, kSpacing, 2 * kSpacing, kSpacing);

  const CGFloat kMaxWidth = self.bounds.size.width - (containedViewInsets.left + containedViewInsets.right);
  const CGFloat kMaxHeight = self.bounds.size.height - (containedViewInsets.top + containedViewInsets.bottom);

  _containedView.frame = CGRectMake(
    containedViewInsets.left,
    containedViewInsets.top,
    MIN(kMaxWidth, _preferredSizeOfContainedView.width),
    MIN(kMaxHeight, _preferredSizeOfContainedView.height)
  );
}

@end

@interface ContainerViewController()

@property (nonatomic, strong) ContainerView *view;
@property (nonatomic, strong) UIViewController *containedViewController;

@end

@implementation ContainerViewController

@dynamic view;

- (void)loadView {
  self.view = [[ContainerView alloc] init];
}

- (void)setContainedViewController:(UIViewController *)containedViewController withViewOfSize:(CGSize)viewSize {
  [_containedViewController removeFromParentViewController];
  _containedViewController = containedViewController;
  [self addChildViewController:containedViewController];
  [self.view setContainedView:containedViewController.view withPreferedSize:viewSize];
  [containedViewController didMoveToParentViewController:self];
}

@end
