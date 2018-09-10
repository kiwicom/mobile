# Android distribution

## Test playground app

You can run the `app` using Android Studio. In `app/build.gradle` you need to replace the `SNAPSHOT` for local the library:

```bash
implementation project(':rnkiwimobile')
// implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```

Then you can run the packager from the root of this repo:

```bash
yarn start
```

Finally, you can make changes in both the library and the JS code and test it in the example app.

## Add a new native dependency

When we update a dependency there are no major changes as versions will be taken from `package.json` and a new snapshot will be deployed.

To add a new native dependency though, that is the most time consuming step. We need to create a separated `SNAPSHOT` for it. We need to create a similar structure for a new dependency like [here](react-native-tooltips).

Usually we only need to change this part to use the correct dependency name:

```gradle
tasks.create('uploadTrinerdis', Upload.class) {
    configuration = project.configurations.archives
    repositories {
        mavenDeployer {
            repository(url: "http://trinerdis.cz:8000/repository/snapshots/") {
                authentication(userName: "deployment", password: System.getenv("ANDROID_DEPLOYMENT_PASSWORD"))
                pom.version = "$version-SNAPSHOT"
                pom.artifactId = "NAME_OF_THE_DEPENDENCY
                pom.groupId = "com.trinerdis.skypicker"
            }
        }
    }
}
```

We also need to add instruct `dependencies.gradle` to take the correct version:

```
ourNativeDependency = packageJson['dependencies']['our-native-dependency'].replace('^', '')
```

Then, we add this dependency as part of `rnkiwimobile` like [here](rnkiwimobile/build.gradle#L48-L50):

```gradle
api "com.trinerdis.skypicker:react-native-maps:$reactNativeMaps-SNAPSHOT"
api "com.trinerdis.skypicker:react-native-vector-icons:$reactNativeVectorIcons-SNAPSHOT"
api "com.trinerdis.skypicker:react-native-tooltips:$reactNativeTooltips-SNAPSHOT"
// Your new dependency here
```

We have a script in [scripts/buildAndroidSnapshots.js](../scripts/buildAndroidSnapshots.js), we will need to add a line in dependencies like:

```js
deployToTrinerdis('react-native-maps'),
deployToTrinerdis('react-native-vector-icons'),
deployToTrinerdis('react-native-tooltips'),
// Your new dependency here
```

## Usage in real app

```
implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```
