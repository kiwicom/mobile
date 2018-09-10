## Add a new external native dependency

When we update a dependency there are no major changes as versions will be taken from [.build/package.json](../../.build/package.json) and a new snapshot will be deployed.

To add a new native dependency though, that is more time consuming. We need to create a separated `SNAPSHOT` for it and upload it to [Trinerdis](http://trinerdis.cz:8000/repository/snapshots/). We need to create a similar structure for a new dependency like in [here](../../RNAndroidPlayground/react-native-tooltips).

Usually we only need to change the following part to use the correct dependency name:

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

We also need to instruct [dependencies.gradle](../../RNAndroidPlayground/dependencies.gradle) to take the correct version:

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

We have a script in [scripts/buildAndroidSnapshots.js](../../scripts/buildAndroidSnapshots.js), we will need to add a line in dependencies like:

```js
deployToTrinerdis('react-native-maps'),
deployToTrinerdis('react-native-vector-icons'),
deployToTrinerdis('react-native-tooltips'),
// Your new dependency here
```
