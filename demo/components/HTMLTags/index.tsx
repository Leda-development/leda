import * as React from 'react';
import { Story } from '../Story';
import { BlockElements } from './BlockElements';
import { StringElements } from './StringElements';
import { LayoutElements } from './LayoutElements';
import { ListElements } from './ListElements';
import { Images } from './Images';

export const HTMLTags = () => (
  <Story title="Верстка с помощью Leda">
    <BlockElements title="Блочные элементы" />
    <StringElements title="Строчные элементы" />
    <LayoutElements title="Элементы размещения" />
    <ListElements title="Списки" />
    <Images title="Картинки" />
  </Story>
);
