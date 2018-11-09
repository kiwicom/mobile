# CodePush

For versioning CodePush we use our own version system following the 
[target binary version](https://github.com/Microsoft/code-push/tree/master/cli#target-binary-version-parameter) section.

We do specify the version in our [package.json#rnkiwimobile](../../package.json#L91-L93).

## Releasing a new version

The script is located in [scripts/codePush.js](../../scripts/codePush.js). You need to be logged in `appcenter`. 
If you do not have it yet, you can install the cli:

```bash
npm install -g appcenter-cli
``` 

And after that you can log in using:

```bash
# This will open the browser offering you a code that you need to paste into the terminal
appcenter login
```

Finally, we can run the script to release into Staging (this will do it for both Android and iOS):

```bash
yarn code-push
```

To release into Production we can simply promote a Staging release to Production in the AppCenter website.

## Bumping a new major version

Just go to the [package.json#rnkiwimobile](../../package.json#L91-L93) and change the version:

```
"rnkiwimobile": {
   // Instead of 1.0.0
  "code-push-target-binary-version": "2.0.0"
}
```

This will make that only users with the native app updated (using JS CodePush version 2.x.x) will get it. 
The users that did not update from 1.0.0 (native side) will not receive it. This allow us not breaking the app for them.
