[![Build Status](https://travis-ci.org/mrtnzlml/native.svg?branch=master)](https://travis-ci.org/mrtnzlml/native)
[![Greenkeeper badge](https://badges.greenkeeper.io/mrtnzlml/native.svg)](https://greenkeeper.io/)

## Known issues

- `PaginationContainer` fails for zero results returned: https://github.com/facebook/relay/issues/1852
- Relay swallows all GraphQL errors in `QueryRenderer`: https://github.com/facebook/relay/issues/1913
- Jest code coverage (Instanbul) doesn't work with Facebook IDX: https://github.com/facebookincubator/idx/issues/19

## Table of Contents

* [Project structure](#project-structure)
* [Best Practices](#best-practices)
  * [Accessing arbitrarily nested, possibly nullable properties on a JavaScript object](#accessing-arbitrarily-nested-possibly-nullable-properties-on-a-javascript-object)

## Project structure

```
.
├── app
│   ├── assets                  - static assets (icons)
│   ├── components
│   │   ├── functional
│   │   └── visual
│   ├── config                  - application configutations
│   ├── screens                 - individual application screens
│   │   ├── homepage
│   │   ├── search
│   │   └── index.js            - navigation and screens definition
│   ├── scripts
│   │   ├── deploy.sh
│   │   └── test.sh             - test script for CI
│   ├── src
│   ├── types                   - only Flow types
│   └── schema.graphql          - GraphQL API schema
├── App.js                      - bootstrap component
└── app.json                    - application settings for Expo
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
