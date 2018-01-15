import UIKit

class SampleView: UIView {
 var lblMessage:UILabel!
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    lblMessage = UILabel(frame: CGRect(x: 0, y: 0, width: 500, height: 20))
    lblMessage.text = ""
    self.addSubview(lblMessage)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setText(_ text: NSString) {
    lblMessage.text = text as String
  }
  
}
