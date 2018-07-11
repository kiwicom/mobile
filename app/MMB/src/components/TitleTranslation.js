// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +title: string,
|};

export default function TitleTranslation(props: Props) {
  const title = props.title.toLowerCase();
  switch (title) {
    case 'mr':
    case 'male':
    case 'mr.':
    case 'mst':
      return <Translation id="mmb.title.mr" />;
    case 'ms':
    case 'female':
    case 'miss':
    case 'mrs':
    case 'mrs.':
    case 'ms.':
      return <Translation id="mmb.title.ms" />;
    default:
      return <Translation passThrough={props.title} />;
  }
}
