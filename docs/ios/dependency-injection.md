# Dependency injection

### Example of vertical: KiwiHotels

For every separate module such as `KiwiHotels` those options must be declared:

1. `initialProperties` - parameters required for the package, eg:

```objc
  return @{
           @"coordinates": @{
               @"latitude" : @59.9139,
               @"longitude": @10.7522
           },
           @"language": @"en",
           @"currency": @"EUR",
           @"lastNavigationMode": _lastNavigationMode,
           @"dimensions": _dimensions
  };
```

2. `moduleName` - the same name which is already defined in app package `index.js` file

3. `jsCodeLocation` - entry point for the module which can be bundle or packager

## Bridge

## Using a vertical
