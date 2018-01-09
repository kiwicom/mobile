This package allows you to render Kiwi.com Frontend GraphQL queries and mutations.

```js
<PublicApiRenderer
  query={graphql`...`}
  render={(propsFromRenderer: Object) => <Component />}
  cacheConfig={{
    force: true, // do not cache the request (default: false)
  }}
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
commitMutation({
  // see config object: https://facebook.github.io/relay/docs/en/mutations.html
})
```
