#import <UIKit/UIKit.h>
#import "City.h"

@interface ViewController : UIViewController<UIPickerViewDelegate,UIPickerViewDataSource, UITextFieldDelegate>
{
  UIDatePicker *startDatePicker;
  UIDatePicker *endDatePicker;
  UIPickerView *cityPicker;
  UITextField *accountToken;
  NSArray<City *> *dataArray;
}
@property (weak, nonatomic) IBOutlet UITextField *pickerTextField;

@end
