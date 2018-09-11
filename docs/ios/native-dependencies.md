# Native dependencies

## Add a new external native dependency

All iOS code is kept in `ios` folder and using the same `Podfile` that's why process of adding a new external native dependency can be achieved by running a command:

```bash
react-native link NATIVE_DEPENDENCY_NAME
```

## Add a new internal native dependecy

1. Add your dependency folder inside `RNModules`

2. Define **`YOUR_NEW_DEP`** in `Podfile` file in `subspecs` within `pod 'RNModules'`

```
def react_native_modules()
  pod 'RNModules', path: './RNModules', subspecs: [
    'RNLogging',
    'RNTranslationManager',
    'RNCurrencyManager',
    'RNDeviceInfo',
    'RNAppleWallet',
    'RNCardManager',
    'YOUR_NEW_DEP'
  ]
end
```

3. Define source files for dependency in `RNModules.podspec`:

```
  s.subspec "YOUR_NEW_DEP" do |ss|
    ss.source_files = 'YOUR_NEW_DEP/YOUR_NEW_DEP/*.{h,m}'
  end
```

4. Run `pod install` in `ios` folder
