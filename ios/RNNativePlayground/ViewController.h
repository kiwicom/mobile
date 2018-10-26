#import <UIKit/UIKit.h>
#import "City.h"

@interface ViewController : UIViewController<UIPickerViewDelegate,UIPickerViewDataSource>
{
  UIDatePicker *startDatePicker;
  UIDatePicker *endDatePicker;
  UIPickerView *cityPicker;
  
  NSArray<City *> *dataArray;
}
@property (weak, nonatomic) IBOutlet UITextField *pickerTextField;

@end
