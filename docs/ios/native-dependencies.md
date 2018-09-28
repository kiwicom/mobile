# Native dependencies

## Adding a React Native dependency

All iOS code is kept in `ios` folder and using the same `Podfile` that's why process of adding a new React Native dependency can be achieved by running a command:

```bash
react-native link NATIVE_DEPENDENCY_NAME
```

To keep the convention of adding new dependency, only where it's exactly needed, you have to move (in `Podfile`) linked library to proper section:

1. Extend `hotels_package_module()` when dependency is used only in hotels package.

2. Extend `mmb_package_module()` when dependency is used only in mmb package.

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
