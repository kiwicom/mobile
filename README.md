[![Build Status](https://travis-ci.org/kiwicom/react-native-app.svg?branch=master)](https://travis-ci.org/kiwicom/react-native-app)

Try it in [Expo](https://expo.io/):

![Expo QR code](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=exp://exp.host/@mrtnzlml/code-review-master)

## Table of Contents

* [Installation and Run](#installation-and-run)
* [Testing](#testing)
* [Contributing](#contributing)
* [Project structure](#project-structure)
* [Update GraphQL schema](#update-graphql-schema)
* [Offline first](#offline-first)
* [Best Practices](#best-practices)
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

## Contributing

All changes to the code must be send via pull request (PR) and this PR is always merged (integrated) by merge master. The code may be reviewed by other person (recommended) but agreement from merge master should be enough. Please try to at least very quickly review PRs of your colleagues to make sure you understand what's happening (and maybe you'll spot some mistakes).

Merge master is responsible for:

- integrating PR into master branch flawlessly
- taking care of overall picture of the application design
- initializing bigger changes in application structure (because of increasing technical debt in some part)

### Checklist

Try to check this before making PR (or during code review):

- [ ] it works on iOS and Android
- [ ] it works in landscape and portrait mode
- [ ] it works offline (if needed)

## Project structure

This project uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) so the root directory is actually so called "workspace root". Workspace root is responsible for handling this repository (especially testing). You can find all sources inside of the `app` directory. Each directory inside `app` should be treated as separate NPM package and you **should not** reuse code from each other via `import` statements. If you need to use one package inside of other package (this should be very common use-case) please require it in `package.json` file (see `app/native/pacakge.json`).

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
├── .travis.yml                 - CI configuration
├── App.js                      - bootstrap component
├── app.json                    - application settings for Expo
└── schema.graphql              - GraphQL schema of the backend server
```

## Update GraphQL schema

```
yarn graphql get-schema
```

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

## Best Practices

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
- Relay swallows all GraphQL errors in `QueryRenderer`: https://github.com/facebook/relay/issues/1913

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
