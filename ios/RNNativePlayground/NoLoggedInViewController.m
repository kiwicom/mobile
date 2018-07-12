#import "NoLoggedInViewController.h"

@interface NoLoggedInViewController ()

@property (weak, nonatomic) IBOutlet UILabel *noLoggedMessage;

@end

@implementation NoLoggedInViewController

- (void)viewDidLoad:(BOOL)animated {
  _noLoggedMessage.text = @"You are not logged in. Please log in.";
}

- (void)viewWillAppear:(BOOL)animated{
  self.navigationController.navigationBar.hidden = NO;
}

@end
