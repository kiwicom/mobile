import UIKit

@objc(SampleViewManager)
class SampleViewManager : RCTViewManager {
  
  override func view() -> UIView! {
    return SampleView();
  }
  
}
