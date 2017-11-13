[![Build Status](https://travis-ci.org/mrtnzlml/native.svg?branch=master)](https://travis-ci.org/mrtnzlml/native)
[![Greenkeeper badge](https://badges.greenkeeper.io/mrtnzlml/native.svg)](https://greenkeeper.io/)

## Known issues

- `PaginationContainer` fails for zero results returned: https://github.com/facebook/relay/issues/1852
- Relay swallows all GraphQL errors in `QueryRenderer`: https://github.com/facebook/relay/issues/1913
- Jest code coverage (Instanbul) doesn't work with Facebook IDX: https://github.com/facebookincubator/idx/issues/19

## Table of Contents

* [Installation](#installation)
* [Project structure](#project-structure)
* [Best Practices](#best-practices)
  * [Accessing arbitrarily nested, possibly nullable properties on a JavaScript object](#accessing-arbitrarily-nested-possibly-nullable-properties-on-a-javascript-object)

## Installation

```
yarn install
```

To start the application simple run `yarn start`. This will change in the future (after Expo detach). During development you may need to fetch new files into monorepo workspace. In this case just run:

```
yarn upgrade @kiwicom
```

## Project structure

This project uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) so the root directory is actually so called "workspace root". Workspace root is responsible for handling this repository (especially testing). You can find all sources inside of the `app` directory. Each directory inside `app` should be treated as separate NPM package and you **should not** reuse code from each other via `import` statements. If you need to use one package inside of other package (this should be very common use-case) please require it in `package.json` file (see `app/native/pacakge.json`).

```
.
├── app/
│   ├── hotels/                 - sources @kiwicom/native-hotels
│   └── native/                 - main sources of the application               <<<
├── scripts/                    - support scripts for the whole monorepo
├── .travis.yml                 - CI configuration
├── App.js                      - bootstrap component
├── app.json                    - application settings for Expo
└── schema.graphql              - GraphQL schema of the backend server
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
