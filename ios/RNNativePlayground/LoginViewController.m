#import "LoginViewController.h"

@interface LoginViewController ()

@property (weak, nonatomic) IBOutlet UITextField *nick;
@property (weak, nonatomic) IBOutlet UITextField *password;
@property (weak, nonatomic) IBOutlet UIButton *logInButton;
@property (weak, nonatomic) IBOutlet UIButton *logOutButton;

@end

@implementation LoginViewController

- (void)viewWillAppear:(BOOL)animated{
  self.navigationController.navigationBar.hidden = NO;
  self.nick.enabled = NO;
  
  if ([[[NSUserDefaults standardUserDefaults] valueForKey:@"accessToken"] length] > 0) {
    self.nick.hidden = YES;
    self.password.hidden = YES;
    self.logInButton.hidden = YES;
  } else self.logOutButton.hidden = YES;
}

- (IBAction)logIn:(UIButton *)sender {

  NSDictionary *tmp = @{@"query": @"mutation LoginMutation($email: String!, $password: String!) { login(email: $email, password: $password) { token identity { fullName } } }", @"variables": @{@"email": [NSString stringWithFormat:@"%@", self.nick.text], @"password": [NSString stringWithFormat:@"%@", self.password.text]}};
  
  NSData *postData = [NSJSONSerialization dataWithJSONObject:tmp options:0 error:nil];
  
  NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
  
  [request setURL:[NSURL URLWithString:@"https://graphql.kiwi.com/"]];
  [request setHTTPMethod:@"POST"];
  [request setHTTPBody:postData];
  [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
  [request setValue:@"application/json" forHTTPHeaderField:@"Accept"];
  [request setHTTPBody:postData];
  
  NSURLSession *session = [NSURLSession sharedSession];
  
  NSURLSessionDataTask *task = [session dataTaskWithRequest:request
                                          completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
      if (error != nil) {
        NSLog(@"Connection success.");
      }
  }];
  
  [task resume];
  
  NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
                                              completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
      if (error != nil) {
        NSLog(@"Error while sending a request %@", error.description);
        return;
      }

      NSDictionary *JSON = [NSJSONSerialization JSONObjectWithData:data
                                                           options:NSJSONReadingMutableContainers
                                                             error:nil];
    
      if([[NSString stringWithFormat:@"%@", JSON[@"data"][@"login"]] isEqualToString:@"<null>"]) {
        NSLog(@"Login failed.");
        return;
      }
    
      NSString *accessToken = JSON[@"data"][@"login"][@"token"];

      NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
      [defaults setValue:accessToken
                  forKey:@"accessToken"];
      [defaults synchronize];

      dispatch_async(dispatch_get_main_queue(), ^{
        [self.navigationController popViewControllerAnimated:YES];
      });
  }];
  
  [dataTask resume];
}


- (IBAction)logOut:(UIButton *)sender {
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  [defaults setValue:@""
              forKey:@"accessToken"];
  [defaults synchronize];
  
  [self.navigationController popViewControllerAnimated:YES];
}

@end
