//
//  LoginViewController.m
//  RNNativePlayground
//
//  Created by Luke Walczak on 05/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "LoginViewController.h"

@interface LoginViewController ()

@property (weak, nonatomic) IBOutlet UITextField *nick;
@property (weak, nonatomic) IBOutlet UITextField *password;

@end

@implementation LoginViewController

- (void)viewWillAppear:(BOOL)animated{
  self.navigationController.navigationBar.hidden = NO;
  self.nick.enabled = NO;
}

- (IBAction)logIn:(UIButton *)sender {
  //post
//  NSURL *url = [NSURL URLWithString:@"https://graphql.kiwi.com/"];
//  NSMutableURLRequest *request = [[NSMutableURLRequest alloc] initWithURL:url];
  
  // json
  
  NSDictionary *tmp = @{@"query": @"mutation LoginMutation($email: String!, $password: String!) { login(email: $email, password: $password) { token identity { fullName } } }", @"variables": @{@"email": [NSString stringWithFormat:@"%@", self.nick.text], @"password": [NSString stringWithFormat:@"%@", self.password.text]}};
  
  NSData *postData = [NSJSONSerialization dataWithJSONObject:tmp options:0 error:nil];
  
  NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
  
  [request setURL:[NSURL URLWithString:@"https://graphql.kiwi.com/"]];
  [request setHTTPMethod:@"POST"];
  [request setHTTPBody:postData];
  [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
  [request setValue:@"application/json" forHTTPHeaderField:@"Accept"];
  [request setHTTPBody:postData];
  
  
  NSData *data = [NSURLConnection sendSynchronousRequest:request returningResponse: nil error:nil];

  NSURLSessionDataTask *task = [[NSURLSession sharedSession] dataTaskWithRequest:request
                                                               completionHandler:^(NSData *data,
                                                                                   NSURLResponse *response,
                                                                                   NSError *error)
                                {
                                  i f (!error)
                                  {
                                    NSLog(@"Success");
                                  }
                                  else
                                  {
                                    NSLog(@"Error: %@", error.localizedDescription);
                                  }
                                }];
  
  // Start the task.
  [task resume];
  
  NSDictionary *JSON = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:nil];
  
  NSLog(@"JSON: %@", JSON);
}

@end
