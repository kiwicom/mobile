// @flow

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

fetch('https://graphql.kiwi.com/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: introspectionQuery,
  }),
})
  .then(res => res.json())
  .then(schemaJSON => printSchema(buildClientSchema(schemaJSON.data)))
  .then(clientSchema =>
    fs.writeFileSync(
      path.join(__dirname, '..', 'schema.graphql'),
      clientSchema,
    ),
  );
