import Foundation


@objc(MyNativeModuleManager)
class MyNativeModuleManager: NSObject {
  
  var bridge: RCTBridge!
  /*
   Don't know why first parameter is not in the @obj() declaration, but it is accordiong to documentation:
   http://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
   */
  @objc(communicate:secondString:number:callback:)
  func communicate(firstString: String, secondString: String, number: NSNumber, callback: @escaping RCTResponseSenderBlock) -> Void {
    NSLog("debug: %@ %@ %@", firstString, secondString, number);
    
    self.bridge.eventDispatcher().sendAppEvent(withName: "EventReminder", body: "just wanted to let you know that I will reply to your callback in a tick");
    callback( [[
      "firstString": firstString,
      "secondString": secondString,
      "number" : number
      ]])
  }
  
}
