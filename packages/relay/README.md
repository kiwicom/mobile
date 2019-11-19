This package allows you to render Kiwi.com Frontend GraphQL queries and mutations.

```js
<PublicApiRenderer
  query={graphql`...`}
  render={(propsFromRenderer: Object) => <Component />}
/>
```

```js
<PrivateApiRenderer
  // same props as PublicApiRenderer + these:
  accessToken="..." // this means user is logged in
  render={<LoginComponent />}  // component to render if user not logged in
/>
```

```js
// Note this should be the environment from props.relay.environment injected by react-relays HOC.
// In some rare cases you will need to call this outside of a query rendern context (e.g. Login),
// Then you will need to create the environment
commitMutation(environment, {
  // see config object: https://facebook.github.io/relay/docs/en/mutations.html
})
```
