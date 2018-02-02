[![CircleCI](https://circleci.com/gh/kiwicom/react-native-app/tree/master.svg?style=svg)](https://circleci.com/gh/kiwicom/react-native-app/tree/master)

This is not an actual mobile application. This repository contains only React Native (RN) parts of the project. These parts are being used in the original (private) native code. However, you can still run this application to see these parts in pure RN.

## Table of Contents

* [Installation and Run](#installation-and-run)
* [Testing](#testing)
* [Building](#building)
  * [Fastline installation](#fastline-installation)
  * [Fastline run instructions](#fastline-run-instructions)
* [Environment](#environment)
* [Project structure](#project-structure)
* [Best practices](#best-practices)
  * [Accessing arbitrarily nested, possibly nullable properties on a JavaScript object](#accessing-arbitrarily-nested-possibly-nullable-properties-on-a-javascript-object)
  * [Error handling](#error-handling)
  * [Offline first](#offline-first)
  * [Working with Playground](#working-with-playground)
  * [Working with GraphQL API](#working-with-graphql-api)
  * [Working with Redux](#working-with-redux)
* [Known issues](#known-issues)
  * [Important to fix before production ready state](#important-to-fix-before-production-ready-state)
  * [Improvements necessary for production usage](#improvements-necessary-for-production-usage)

## Installation and Run

> Note: we currently support only macOS.

All necessary information are described in the official [React Native documentation](http://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies). Basically you need to install macOS dependencies:

```
brew install node watchman yarn
gem install cocoapods
```

Install Xcode and Android Studio. After that clone this repository and install all the necessary dependencies:

```
git clone git@github.com:kiwicom/react-native-app.git
cd react-native-app
yarn install && ( cd ios ; pod install )
```

And if you have Xcode already installed - just run `yarn ios`. It should open iPhone emulator with our application. Similarly for Android (`yarn android`) but you have to open Android emulator first.

## Testing

You will usually need only this during development:

```
yarn test
yarn test --watch
```

It's good idea to run the whole test-set using this command:

```
yarn test-ci
```

It basically consists of code linting, type checking, complete testing and GraphQL schema validation. You can find more possibilities by running `yarn run`.

## Building

We use Fastlane as a tool for building, codesigning and uploading to App Store, Google Play and beta testing environments (currently we have support for iOS only via TestFlight).

### Fastline installation

First please read the [installation instructions](https://docs.fastlane.tools/#getting-started) in the official docs. It's also necessary to setup environment variables. Place an `.env` file in the same folder as the Fastfile (`ios/fastline/.env`) and add `APPLE_ID=your@apple.id`.

### Fastline run instructions

In order to build and deploy this project to the TestFlight just navigate to the `ios` folder and run `fastlane beta`. Alternatively from root directory:

```
( cd ios ; fastlane beta )
```

This new build has to be distributed to the (external) testers. To do so just go to iTunes Connect, select the right application > TestFlight > iOS builds > select build number > Groups (+) > select the group of testers > next, next, next...

## Environment

All sensitive environment variables are stored in `.env` file. You should setup these variables if you want 100% of all functions.

**Information for Kiwi.com employees:** all environment variables are shared using [Vault](https://www.vaultproject.io/). Ask your colleagues how to get them. You'll first need VPN, secret key (token) and Vault namespace.

## Project structure

This project uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) so the root directory is actually so called "workspace root". Workspace root is responsible for handling this repository (especially testing). You can find all sources inside of the `app` directory. Each directory inside `app` should be treated as separate NPM package and you **should not** reuse code from each other via `import` statements. If you need to use one package inside of other package (this should be very common use-case) please require it in `package.json` file (see `app/core/package.json`).

```
.
├── .circleci/                  - CI configuration
├── .github/                    - GitHub templates (for PR, issues, contributing)
├── android/                    - native code for Android
├── app/
│   ├── common/                 - @kiwicom/react-native-app-common
│   ├── config/                 - @kiwicom/react-native-app-config
│   │── core/                   - @kiwicom/react-native-app-core (core package)
│   │   ├── config/                - application (module) configuration
│   │   └── src/                   - source files
│   │       └── screens/           - main screens (usually Relay QueryRenderer roots)
│   ├── examples/               - examples of RN vs. native code interoperability
│   ├── hotels/                 - @kiwicom/react-native-app-hotels
│   ├── redux/                  - @kiwicom/react-native-app-redux
│   └── relay/                  - @kiwicom/react-native-app-relay
├── ios/                        - native code for iOS
├── scripts/                    - support scripts for the whole monorepo
└── schema.graphql              - GraphQL schema of the backend server
```

In case you need additional dependency for the package, you should add it to the `package.json` of the workspace (for example `app/hotels/package.json`). Root `package.json` is only for global dependencies related to the whole monorepo (testing tools, linters and so on).

## Best practices

### Accessing arbitrarily nested, possibly nullable properties on a JavaScript object

Sometimes (especially in GraphQL environment with nullable results) it's necessary to access deeply nested objects in order to get the value. However the path may contain nullable fields and therefore it's necessary to do checks like this:

```js
props.user &&
props.user.friends &&
props.user.friends[0] &&
props.user.friends[0].friends
```

But that's not very friendly and this is why we have `idx` function. You can use it like this:

```js
import idx from 'idx';

idx(props, _ => _.user.friends[0].friends)
```

**Do not use `_.get(...)` from Lodash!** For more information please read [documentation here](https://github.com/facebookincubator/idx).

### Error handling

Error handling is complicated in general - especially in GraphQL environment. There are several scenarios that may occur:

1. GraphQL API returns `data` field and no `errors`

This should be considered as a valid full response and there should not be any errors. There may be nullable fields, however.

2. GraphQL API returns `data = null` and `errors` field

This is fatal error. Server was not able to get data and it's probably not operating correctly. It's like equivalent of total GraphQL server error (500). We should display full page error (`GeneralError` component).

3. GraphQL API returns `data` but also `errors` field

Most common scenario (somewhere between). In this case we are able to fetch at least something but it failed partially so there are errors and we can expect some nullable fields. This may be just missing prices but also completely missing data. It's very different to point 2.

We are showing little warning in this case. How to handle nullable fields really depends on the situation. Sometimes it's OK to leave it empty instead of for example hotel rating (★★★), sometimes it's necessary to display error message or sad picture in case of completely missing hotels. It depends. We are always trying to render as much as possible.

### Offline first

This application is mainly for travelers so being offline is still quite a big deal. We are storing by default every response from GraphQL API. However, this is not always appropriate. Especially not during search (flight, hotel). In this situations you need to pass `force:true` configuration:

```js
<PublicApiRenderer
  query={qraphql`...`}
  render={props => <Component />}
  cacheConfig={{
    force: true, // always refetch the query (do not touch the cache)
  }}
/>
```

In case of refetch container:

```js
this.setState({ refreshing: true }, () => {
  this.props.relay.refetch(
    v => v,
    null,
    () => { this.setState({ refreshing: false }); },
    {
      force: true, // always refetch the query (do not touch the cache)
    },
  );
});
```

### Working with Playground

There is so called Playground for easier development. It's our custom WIP replacement for Storybook. The idea is to write regular component tests with ability to see them in the Playground. Therefore you need to write only the tests and you don't have to maintain additional stories. Example of simple test:

```js
it('Works!', () => {
  PlaygroundRenderer.render(<AdaptableBadge text="default badge" />);
  PlaygroundRenderer.render(<AdaptableBadge text="badge with color" color="red" />);
});
```

The `PlaygroundRenderer` allows you to see the tests in the Playground and it automatically creates shallow snapshots of the component. You can start the Playground in the `index.js`:

```js
// import App from './app/App';
import App from './app/Playground';
```

### Working with GraphQL API

This application uses GraphQL API as a data source. You can find GraphQL schema in `schema.graphql` file. This schema is used by Relay Compiler and Relay Babel plugin to generate and validate queries for backend server. GraphQL API itself is evolving over time so you may need to update our snapshot. You can do it easily using this command:

```
yarn graphql
```

Additional useful tools:

- https://kiwi-graphiql.now.sh/ (introspection and docs)
- https://kiwi-graphql-voyager.now.sh/ (graphical visualisation)

### Working with Redux

This application consists of independent packages so they can be reused or replaced in other applications (or included in iOS and Android codebase). Unfortunately, this makes Redux usage little bit complicated because Redux by default expects centralized state store but reducers for each individual package should be stored in the package itself. In order to use Redux store - all Redux reducers must be registered first. So if you want to use Redux in, let's say, `hotels` package you must first:

1. install Redux dependency (called in the `hotels` package scope):

```
yarn add @kiwicom/react-native-app-redux
```

2. register reducers:

```js
import { injectAsyncReducer, store } from '@kiwicom/react-native-app-redux';
import HotelsReducer from './src/HotelsReducer';

injectAsyncReducer(store, 'hotels', HotelsReducer);
```

We currently **do not** officially support calling actions on reducers outside of one package. This means that you should always work with actions and reducers from `HotelReducer`. This should be in most of the scenarios good enough. You must use `connect` function from `@kiwicom/react-native-app-redux` package in order to connect React component to the Redux store:

```js
import { connect } from '@kiwicom/react-native-app-redux';

export default connect(select, actions)(ComponentWithoutStore);
```

## Known issues

### Important to fix before production ready state

- `PaginationContainer` fails for zero results returned: https://github.com/facebook/relay/issues/1852, fixed by https://github.com/facebook/relay/commit/a17b462b3ff7355df4858a42ddda75f58c161302 (not released yet)

### Improvements necessary for production usage

- persistent GraphQL queries: https://zlml.cz/persist-your-graphql-queries
