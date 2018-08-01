Pod::Spec.new do |s|

  s.name           = 'RNModules'
  s.version        = '0.0.2'
  s.summary        = 'A group of native wrappers for React Native'
  s.description    = 'A group of native wrappers for React Native'
  s.license        = 'MIT'
  s.author         = 'kiwi.com'
  s.homepage       = 'https://kiwi.com'
  s.source         = { path: 'RNModules.podspec' }


  s.requires_arc   = true
  s.platform       = :ios, '8.0'

  s.preserve_paths = 'LICENSE', 'README.md', 'package.json', 'index.js'
  s.dependency 'React'

  s.subspec "RNCurrencyManager" do |ss|
    ss.source_files   = 'RNCurrencyManager/RNCurrencyManager/*.{h,m}'
  end

  s.subspec "RNDeviceInfo" do |ss|
    ss.source_files   = 'RNDeviceInfo/RNDeviceInfo/*.{h,m}'
  end

  s.subspec "RNLogging" do |ss|
    ss.source_files   = 'RNLogging/RNLogging/*.{h,m}'
  end

  s.subspec "RNTranslationManager" do |ss|
    ss.source_files   = 'RNTranslationManager/RNTranslationManager/*.{h,m}'
  end

  s.subspec "RNAppleWallet" do |ss|
    ss.source_files   = 'RNAppleWallet/RNAppleWallet/*.{h,m}'
  end
end
