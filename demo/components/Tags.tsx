
import * as React from 'react';
import * as L from '../../leda';

export const Tags = () => (
  <L.Div _demo-story>
    <L.H4 _story-title>Tags</L.H4>
    <br />
    <L.Tags>
      <L.Tag>Москва</L.Tag>
      <L.Tag>Санкт-Петербург</L.Tag>
      <L.Tag>Воронеж</L.Tag>
      <L.Tag>Старый Оскол</L.Tag>
    </L.Tags>
  </L.Div>
);
