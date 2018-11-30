#import <RNKiwiMobile/RNKiwiMobile.h>
#import "ViewController.h"
#import "City.h"

@interface ViewController () <UIGestureRecognizerDelegate, RNKiwiViewControllerFlowDelegate, RNKiwiCurrencyManager, RNKiwiTranslationProvider>

@property (nonatomic, strong) RNKiwiViewController *activeVc;
@property (weak, nonatomic) IBOutlet UITextField *startDateSelectionTextField;
@property (weak, nonatomic) IBOutlet UITextField *endDateSelectionTextField;

@end

@implementation ViewController

- (instancetype)initWithCoder:(NSCoder *)coder {
  self = [super initWithCoder:coder];
  
  if (self) {
    /**
     * In order to create bridge upfront and set up codepush key,
     * call method `initBridgeWithCodePush` before showing ViewController.
     * If you don't want to call codepush run `initBridge`.
     * If you want to use codepush, but don't want to init bridge upfront call `initCodePush`,
     * and bridge will be created at the runtime lazily.
     */
    
    NSString *codePushVersion = [[[self readPackageJSON] valueForKey:@"rnkiwimobile"] valueForKey:@"code-push-target-binary-version"];
    
    #ifdef STAGING
      NSString *stagingCodePushKey = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"STAGING_KEY"];
      [[RNKiwiSharedBridge sharedInstance] initBridgeWithCodePush:stagingCodePushKey codePushVersion:codePushVersion];
    #elif RELEASE
      NSString *releaseCodePushKey = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"RELEASE_KEY"];
      [[RNKiwiSharedBridge sharedInstance] initBridgeWithCodePush:releaseCodePushKey codePushVersion:codePushVersion];
    #else
      [[RNKiwiSharedBridge sharedInstance] initBridge];
    #endif
  }
  return self;
}

- (void)viewDidLoad {
  //  Setting date components
  NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];
  NSDate *currentDate = [NSDate date];
  NSDateComponents *dateComponent = [[NSDateComponents alloc] init];

  //  Initialize start date picker
  startDatePicker=[[UIDatePicker alloc] init];
  [startDatePicker setDatePickerMode:UIDatePickerModeDate];
  
  //  Setting default dates
  //  * minimum checkin date is current day
  [dateComponent setDay:364];
  NSDate *startMaxDate = [calendar dateByAddingComponents:dateComponent toDate:currentDate options:0];
  startDatePicker.minimumDate = currentDate;
  //  * maximum checkin date is current day + 364 days
  startDatePicker.maximumDate = startMaxDate;
  //  * picked checkin date is current day + 30
  [dateComponent setDay:30];
  NSDate *defaultStartDate = [calendar dateByAddingComponents:dateComponent toDate:currentDate options:0];
  startDatePicker.date = defaultStartDate;
  
  // Display picked start date
  [self.startDateSelectionTextField setInputView:startDatePicker];
  
  //  Initialize end date picker
  endDatePicker=[[UIDatePicker alloc] init];
  [endDatePicker setDatePickerMode:UIDatePickerModeDate];
  
  //  By default:
  //  * maximum checkout date is current day + 365 days
  [dateComponent setDay:365];
  NSDate *endMaxDate = [calendar dateByAddingComponents:dateComponent toDate:currentDate options:0];
  endDatePicker.maximumDate = endMaxDate;
  //  * picked checkout date is current day + 37 days
  [dateComponent setDay:37];
  NSDate *defaultEndDate = [calendar dateByAddingComponents:dateComponent toDate:currentDate options:0];
  endDatePicker.date = defaultEndDate;
  
  // Display picked end date
  [self.endDateSelectionTextField setInputView:endDatePicker];
 
  //  Initialize city picker
  cityPicker = [[UIPickerView alloc] init];
  [cityPicker setDataSource:self];
  [cityPicker setDelegate:self];
  [cityPicker setShowsSelectionIndicator:YES];
  [self.pickerTextField setInputView:cityPicker];
  
  // Available cities
  City *Prague = [[City alloc] initWithName:@"Prague"
                                      andId:@"aG90ZWxDaXR5Oi01NTMxNzM=“"
                             andCoordinates:@{@"latitude": @50.08804, @"longitude": @14.42076}];
  City *Brno = [[City alloc] initWithName:@"Brno"
                                    andId:@"aG90ZWxDaXR5Oi01NDIxODQ="
                           andCoordinates:@{@"latitude": @49.195061, @"longitude": @16.606836}];
  City *Barcelona = [[City alloc] initWithName:@"Barcelona"
                                         andId:@"aG90ZWxDaXR5Oi0zNzI0OTA="
                                andCoordinates:@{@"latitude": @12.123, @"longitude": @321.321}];
  dataArray=[[NSArray alloc] initWithObjects:Prague,Brno,Barcelona, nil];
  
  [self.startDateSelectionTextField setInputAccessoryView:[self customizeToolbar:@selector(selectedStartDate)]];
  [self.endDateSelectionTextField setInputAccessoryView:[self customizeToolbar:@selector(selectedEndDate)]];
  [self.pickerTextField setInputAccessoryView:[self customizeToolbar:@selector(selectedCity)]];
}

- (void)viewDidAppear:(BOOL)animated {
  self.navigationController.navigationBar.hidden = YES;
  self.navigationController.interactivePopGestureRecognizer.delegate = self;
}

- (NSDictionary *)readPackageJSON {
  NSString *path = [[NSBundle mainBundle] pathForResource:@"package" ofType:@"json"];
  NSData *data = [[NSData alloc] initWithContentsOfFile:path];
  return [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
}

- (UIToolbar *)customizeToolbar:(SEL)selector {
  UIToolbar *toolBar = [[UIToolbar alloc] initWithFrame:CGRectMake(0, 0, 320, 44)];
  UIBarButtonItem *doneButtton =  [[UIBarButtonItem alloc] initWithTitle:@"Done"
                                                                   style:UIBarButtonItemStyleDone
                                                                  target:self
                                                                  action:selector];
  
  [toolBar setTintColor:[UIColor grayColor]];
  [toolBar setItems:[NSArray arrayWithObjects:doneButtton, nil]];
  
  return toolBar;
}

- (NSString *)resetDescendingDates {
  NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];
  NSDateComponents *dateComponent = [[NSDateComponents alloc] init];
  NSDateFormatter *dateFormatter =[[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd"];

  [dateComponent setDay:1];
  NSDate *customEndDate = [calendar dateByAddingComponents:dateComponent toDate:startDatePicker.date options:0];
  endDatePicker.date = customEndDate;
  
  self.endDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:customEndDate]];
  return self.startDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:startDatePicker.date]];
}

- (NSString *)resetOverEndDate {
  NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];
  NSDateComponents *dateComponent = [[NSDateComponents alloc] init];
  NSDateFormatter *dateFormatter =[[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd"];
  [dateComponent setDay:-30];
  NSDate *endDateMinusThirtyDays = [calendar dateByAddingComponents:dateComponent toDate:endDatePicker.date options:0];
  
  startDatePicker.date = endDateMinusThirtyDays;
  
  self.endDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:endDatePicker.date]];
  return self.startDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:endDateMinusThirtyDays]];
}

- (NSString *)selectedStartDate {
  NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];
  NSDateComponents *dateComponent = [[NSDateComponents alloc] init];
  
  NSDateFormatter *dateFormatter =[[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd"];
  
  [dateComponent setDay:30];
  NSDate *startDatePlusThirtyDays = [calendar dateByAddingComponents:dateComponent toDate:startDatePicker.date options:0];
  
  [self.startDateSelectionTextField resignFirstResponder];
  
  // Checkin date > checkout date
  if ([startDatePicker.date compare:endDatePicker.date] == NSOrderedDescending) {
    [self resetDescendingDates];
  }
  
  // Checkout date > Checkin + 30
  if (![self.startDateSelectionTextField.text isEqualToString:@""] && [endDatePicker.date compare:startDatePlusThirtyDays] == NSOrderedDescending) {
    [self resetOverEndDate];
  }
  
  return self.startDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:startDatePicker.date]];
}

- (NSString *)selectedEndDate {
  NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSCalendarIdentifierGregorian];
  NSDateComponents *dateComponent = [[NSDateComponents alloc] init];
  
  NSDateFormatter *dateFormatter =[[NSDateFormatter alloc] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd"];
  
  [dateComponent setDay:30];
  NSDate *startDatePlusThirtyDays = [calendar dateByAddingComponents:dateComponent toDate:startDatePicker.date options:0];

  [self.endDateSelectionTextField resignFirstResponder];
  
  // Checkin date > checkout date
  if ([startDatePicker.date compare:endDatePicker.date] == NSOrderedDescending) {
    [self resetDescendingDates];
  }
  
  // Checkout date > Checkin + 30
  if (![self.startDateSelectionTextField.text isEqualToString:@""] && [endDatePicker.date compare:startDatePlusThirtyDays] == NSOrderedDescending) {
    [self resetOverEndDate];
  }
  
  //  Choosing checkout date before checkin date
  if ([self.startDateSelectionTextField.text isEqualToString:@""]) {
    [dateComponent setDay:-1];
    NSDate *customStartDate = [calendar dateByAddingComponents:dateComponent toDate:endDatePicker.date options:0];
    startDatePicker.date = customStartDate;
    
    self.startDateSelectionTextField.text = [NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:customStartDate]];
    return self.endDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:endDatePicker.date]];
  }
  
  return self.endDateSelectionTextField.text=[NSString stringWithFormat:@"%@", [dateFormatter stringFromDate:endDatePicker.date]];
}

- (City *)selectedCity {
  [self.pickerTextField resignFirstResponder];
  self.pickerTextField.text=[dataArray objectAtIndex:[cityPicker selectedRowInComponent:0]].cityName;
  return [dataArray objectAtIndex:[cityPicker selectedRowInComponent:0]];
}

- (NSDictionary *)windowDimensions {
  CGRect windowRect = self.view.window.frame;
  return @{
           @"width": @(windowRect.size.width),
           @"height": @(windowRect.size.height)
         };
}



- (void)setActiveViewController:(RNKiwiViewController *)vc {
  __weak typeof(self) weakSelf = self;
  
  [vc setCurrencyFormatter:weakSelf];
  [vc setTranslationProvider:weakSelf];
  [vc setFlowDelegate:weakSelf];
  
  _activeVc = vc;
}

// Offer search is based on city ID
- (IBAction)presentNewHotelsView:(id)sender {
  
  RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"NewKiwiHotels"
                                                        initialProperties:@{
                                                          @"language": @"en",
                                                          @"currency": @"EUR",
                                                          @"lastNavigationMode": @"present",
                                                          @"dimensions": [self windowDimensions],
                                                          @"checkin": [self selectedStartDate],
                                                          @"checkout": [self selectedEndDate],
                                                          @"version": @"3.7.13-9d55ad66",
                                                          @"cityName": [self selectedCity].cityName,
                                                          @"cityId": [self selectedCity].cityId,
                                                          @"roomsConfiguration": @[
                                                              @{
                                                                @"adultsCount": @1,
                                                                @"children": @[
                                                                    @{
                                                                      @"age": @2
                                                                    }
                                                                ]
                                                              }
                                                          ]
                                                        }];
  
  [self setActiveViewController:vc];
  [[self navigationController] presentViewController:vc animated:YES completion:nil];
}

// Offer search is based on coordinates
- (IBAction)present22stay:(id)sender {
  
  RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"NewKiwiHotels"
                                                        initialProperties:@{
                                                                            @"language": @"en",
                                                                            @"currency": @"EUR",
                                                                            @"lastNavigationMode": @"present",
                                                                            @"dimensions": [self windowDimensions],
                                                                            @"checkin": [self selectedStartDate],
                                                                            @"checkout": [self selectedEndDate],
                                                                            @"version": @"3.7.13-9d55ad66",
                                                                            @"cityName": [self selectedCity].cityName,
                                                                            @"coordinates": [self selectedCity].cityCoordinates,
                                                                            @"roomsConfiguration": @[
                                                                                @{
                                                                                  @"adultsCount": @1,
                                                                                  @"children": @[
                                                                                      @{
                                                                                        @"age": @2
                                                                                        }
                                                                                      ]
                                                                                  }
                                                                                ]
                                                                            }];
  [self setActiveViewController:vc];
  [[self navigationController] presentViewController:vc animated:YES completion:nil];
}

# pragma mark - UIPickerView DataSource Method

- (NSInteger)numberOfComponentsInPickerView:(UIPickerView *)pickerView {
  return 1;
}

- (NSInteger)pickerView:(UIPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component {
  return [dataArray count];
}

# pragma mark - UIPickerView Delegate Method

- (NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component {
  return [dataArray objectAtIndex:row].cityName;
}

- (void)pickerView:(UIPickerView *)pickerView didSelectRow:(NSInteger)row inComponent:(NSInteger)component {
  self.pickerTextField.text=[dataArray objectAtIndex:row].cityName;
}

# pragma mark - RNKiwiViewControllerFlowDelegate

- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController {
  [self.navigationController popViewControllerAnimated:YES];
}

# pragma mark - RNKiwiCurrencyManager

- (NSString *)formattedPrice:(NSNumber *)price withCurrency:(NSString *)currencyCode {
  return [[price stringValue] stringByAppendingString:currencyCode];
}

#pragma mark - RNKiwiTranslationProvider

- (NSString *)localizedStringWithKey:(NSString *)key {
  // In real app it would give us the String based on localization
  return nil;
}

#pragma mark - UIGestureRecognizer

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldReceiveTouch:(UITouch *)touch {
  if (self.navigationController.interactivePopGestureRecognizer == gestureRecognizer) {
    return [_activeVc isInteractivePopGestureAllowed];
  }
  return YES;
}

@end
