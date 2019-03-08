// @flow strict

import fs from 'fs';
import path from 'path';
import fetch from '@kiwicom/fetch';
import {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} from 'graphql/utilities';

fetch('https://graphql.kiwi.com/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: getIntrospectionQuery(),
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
