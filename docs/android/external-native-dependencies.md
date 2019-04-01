# Add a new external native dependency

When we update a dependency there are no major changes as versions will be taken from 
[.build/package.json](../../.build/package.json) and a new snapshot will be deployed.

To add a new native dependency though, that is more time consuming. After linking the native module, you should also add the package to [RNHotelsModule.kt](../../android/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/hotels/RNHotelsModule.kt) `getPackages` function.

Then we need to modify the 
`[android/build.gradle](../../android/build.gradle)`.
This will deploy a new `SNAPSHOT` for it and upload it to 
[Gitlab packages](https://gitlab.skypicker.com/mobile/android/-/packages).

We need to add a new case on the [gradle switch-case](../../android/build.gradle#L77) similar to:

```gradle
case 'react-native-tooltips':
    configure(project) {
        publishAndroidLibrary("com.trinerdis.skypicker", project.name, "$reactNativeTooltips-SNAPSHOT")
    }
    break
```

We also need to instruct [rnkiwimobile/versions.gradle](../../android/rnkiwimobile/versions.gradle) to take the 
correct version:

```
ourNativeDependency = packageJson['dependencies']['our-native-dependency'].replace('^', '')
```

Then, we add this dependency as part of `rnkiwimobile` like 
[android/rnkiwimobile/build.gradle](../../android/rnkiwimobile/build.gradle#L48-L50):

```gradle
api "com.trinerdis.skypicker:react-native-maps:$reactNativeMaps-SNAPSHOT"
api "com.trinerdis.skypicker:react-native-vector-icons:$reactNativeVectorIcons-SNAPSHOT"
api "com.trinerdis.skypicker:react-native-tooltips:$reactNativeTooltips-SNAPSHOT"
// Your new dependency here
```

We have a script in [scripts/buildAndroidSnapshots.js](../../scripts/buildAndroidSnapshots.js), we will need to add a 
line in dependencies similar to (check the script structure):

```js
deployDependency('react-native-maps', ...),
deployDependency('react-native-vector-icons', ...),
deployDependency('react-native-tooltips', ...),
// Your new dependency here
```

You can [deploy](../android/deploy.md) the new dependency manually or it will be deployed when merging your PR to
master.

## Naming

Dependencies will be deployed following the convention:

```bash
[dependencyName]-[dependencyVersion].react-native.[reactNativeVersion]-SNAPSHOT
```

The reason to add `react-native` is that all dependencies should share the same version of it, therefore, when we update
`react-native` all dependencies will be deployed with its new version.
