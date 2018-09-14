# Native dependencies

## Adding a React Native dependency

All iOS code is kept in `ios` folder and using the same `Podfile` that's why process of adding a new React Native dependency can be achieved by running a command:

```bash
react-native link NATIVE_DEPENDENCY_NAME
```

## Add a new internal/external native dependecy

1. Add dependency folder inside `RNModules`

2. Define **`NEW_DEPENDENCY`** in `Podfile` file in `subspecs` within `pod 'RNModules'`

```
def react_native_modules()
  pod 'RNModules', path: './RNModules', subspecs: [
    'RNLogging',
    'RNTranslationManager',
    'RNCurrencyManager',
    'RNDeviceInfo',
    'RNAppleWallet',
    'RNCardManager',
    'NEW_DEPENDENCY'
  ]
end
```

3. Define source files for dependency in `RNModules.podspec`:

```
  s.subspec "NEW_DEPENDENCY" do |ss|
    ss.source_files = 'NEW_DEPENDENCY/NEW_DEPENDENCY/*.{h,m}'
  end
```

4. Run `pod install` in `ios` folder
