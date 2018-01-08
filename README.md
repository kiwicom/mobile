Try it in [Expo](https://expo.io/):

![Expo QR code](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=exp://exp.host/@mrtnzlml/code-review-master)

[![CircleCI](https://circleci.com/gh/kiwicom/react-native-app/tree/master.svg?style=svg)](https://circleci.com/gh/kiwicom/react-native-app/tree/master)

## Table of Contents

* [Installation and Run](#installation-and-run)
* [Environment](#environment)
* [Testing](#testing)
* [Project structure](#project-structure)
* [Working with GraphQL API](#working-with-graphql-api)
* [Offline first](#offline-first)
* [Error handling](#error-handling)
* [Best practices](#best-practices)
  * [Accessing arbitrarily nested, possibly nullable properties on a JavaScript object](#accessing-arbitrarily-nested-possibly-nullable-properties-on-a-javascript-object)
* [Known issues](#known-issues)
* [Troubleshooting](#troubleshooting)

## Installation and Run

```
yarn install
```

If you have Xcode just run `yarn ios` and you are ready to go. Similarly for Android (`yarn android`).

To start the application simple run `yarn start`. This will change in the future (after Expo detach). During development you may need to fetch new files into monorepo workspace. In this case just run:

```
yarn upgrade @kiwicom
```

## Environment

All sensitive environment variables are stored in `.env` file. You should setup these variables if you want 100% of all functions.

**Information for Kiwi.com employees:** all environment variables are shared using [Vault](https://www.vaultproject.io/). Ask your colleagues how to get them. You'll first need VPN, secret key (token) and Vault namespace.

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

## Project structure

This project uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) so the root directory is actually so called "workspace root". Workspace root is responsible for handling this repository (especially testing). You can find all sources inside of the `app` directory. Each directory inside `app` should be treated as separate NPM package and you **should not** reuse code from each other via `import` statements. If you need to use one package inside of other package (this should be very common use-case) please require it in `package.json` file (see `app/core/package.json`).

```
.
├── app/
│   ├── common/                 - @kiwicom/react-native-app-common
│   │── core/                   - @kiwicom/react-native-app-core (core package)
│   │   ├── assets/                - static files
│   │   ├── config/                - application (module) configuration
│   │   └── src/                   - source files
│   │       └── screens/           - main screens (usually Relay QueryRenderer roots)
│   ├── hotels/                 - @kiwicom/react-native-app-hotels
│   └── relay/                  - @kiwicom/react-native-app-relay
├── scripts/                    - support scripts for the whole monorepo
├── App.js                      - bootstrap component
├── app.json                    - application settings for Expo
└── schema.graphql              - GraphQL schema of the backend server
```

In case you need additional dependency for the package, you should add it to the `package.json` of the workspace (for example `app/hotels/package.json`). Root `package.json` is only for global dependencies related to the whole monorepo (testing tools, linters and so on).

## Working with GraphQL API

This application uses GraphQL API as a data source. You can find GraphQL schema in `schema.graphql` file. This schema is used by Relay Compiler and Relay Babel plugin to generate and validate queries for backend server. GraphQL API itself is evolving over time so you may need to update our snapshot. You can do it easily using this command:

```
yarn graphql:update
```

Additional useful tools:

- https://kiwi-graphiql.now.sh/ (introspection and docs)
- https://kiwi-graphql-voyager.now.sh/ (graphical visualisation)

## Offline first

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

## Error handling

Error handling is complicated in general - especially in GraphQL environment. There are several scenarios that may occur:

1. GraphQL API returns `data` field and no `errors`

This should be considered as a valid full response and there should not be any errors. There may be nullable fields, however.

2. GraphQL API returns `data = null` and `errors` field

This is fatal error. Server was not able to get data and it's probably not operating correctly. It's like equivalent of total GraphQL server error (500). We should display full page error (`GeneralError` component).

3. GraphQL API returns `data` but also `errors` field

Most common scenario (somewhere between). In this case we are able to fetch at least something but it failed partially so there are errors and we can expect some nullable fields. This may be just missing prices but also completely missing data. It's very different to point 2.

We are showing little warning in this case. How to handle nullable fields really depends on the situation. Sometimes it's OK to leave it empty instead of for example hotel rating (★★★), sometimes it's necessary to display error message or sad picture in case of completely missing hotels. It depends. We are always trying to render as much as possible.

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

## Known issues

#### Important to fix before production ready state

- `PaginationContainer` fails for zero results returned: https://github.com/facebook/relay/issues/1852, fixed by https://github.com/facebook/relay/commit/a17b462b3ff7355df4858a42ddda75f58c161302 (not released yet)

#### Improvements necessary for production usage

- persistent GraphQL queries: https://zlml.cz/persist-your-graphql-queries

#### Nice to have

- Jest code coverage (Instanbul) doesn't work with Facebook IDX: https://github.com/facebookincubator/idx/issues/19 (possible solution: https://github.com/facebook/jest/issues/3549#issuecomment-347915603)

## Troubleshooting

Expo client throws (even in emulator):

```
This experience uses an unsupported version of Expo (SDK 23.0.0). You may need to update Expo.
```

In this case please delete the Expo app (yes, even in the emulator) and run `yarn ios` again. The Expo client will update automatically.
