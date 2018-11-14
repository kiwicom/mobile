// @flow strict

import fs from 'fs';
import path from 'path';
import fetch from '@mrtnzlml/fetch';

const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require('graphql/utilities');

(async () => {
  const res = await fetch('https://graphql.kiwi.com/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
    fetchTimeout: 15000,
    retryDelays: [1000, 3000],
  });

  const schemaJSON = await res.json();
  const clientSchema = printSchema(buildClientSchema(schemaJSON.data));
  fs.writeFileSync(path.join(__dirname, '..', 'schema.graphql'), clientSchema);
})();
