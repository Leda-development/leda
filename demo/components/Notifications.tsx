/* eslint-disable no-alert, no-console,import/no-extraneous-dependencies */
import * as React from 'react';
import shortId from 'shortid';
import * as L from '../../leda';
import { Item } from '../../leda/components/Notifications/types';
import { getClassNames } from '../../leda/utils';

const hooks1 = {
  text: `
Хуки решают множество, казалось бы, несвязанных между собой, проблем в <b>React</b>, 
с которыми мы сталкивались в течение пяти лет написания и поддержки 
десятков тысяч компонентов. Если вы изучаете <b>React</b>, используете его ежедневно 
или используете другую библиотеку с похожим компонентным подходом, 
эти проблемы наверняка покажутся вам знакомыми.
`,
  iconClassName: 'uicon-question1',
  className: 'warning',
  delay: 0,
};

const hooks2 = {
  text: `
С помощью хуков вы можете извлечь логику состояния из компонента, 
чтобы её протестировать или повторно использовать. <b>Хуки позволяют вам 
переиспользовать логику состояния, не затрагивая дерево компонентов.</b> 
Благодаря этому, хуки легко использовать в разных компонентах и делиться ими с сообществом.
`,
  iconClassName: 'uicon-exclamation-in-circle',
  className: 'warning',
  delay: 1000,
};

const hooks3 = {
  text: `
Перед тем, как мы продолжим, обратите внимание, что хуки:
<ul>
  <li><b>Полностью на ваше усмотрение.</b> Вы можете попробовать хуки в одних компонентах, не изменяя код в других. Хуки не обязательно использовать или изучать прямо сейчас.</li>
  <li><b>100% обратно совместимы.</b> Хуки не содержат изменений, которые могут поломать ваш существующий код.</li>
  <li><b>Доступны прямо сейчас.</b> Хуки доступны с выходом версии 16.8.0.</li>
</ul>
`,
  iconClassName: 'uicon-check',
};

const notifications = [hooks1, hooks2, hooks3];

export const Notifications = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  console.log('items', items)
  return (
    <L.Div _demoStory>
      <L.H4 _title>Notifications</L.H4>
      <L.Notifications
        value={items}
        maxItems={3}
        onChange={ev => setItems(ev.component.value)}
        contentRender={({ elementProps }) => <L.Div {...elementProps} _txtWarning />}
        iconRender={({ elementProps }) => <L.I {...elementProps} _txtSuccess />}
      />
      <br />
      <L.Button
        _warning
        onClick={() => setItems([
          ...items,
          { ...notifications[Math.floor(Math.random() * 3)], id: shortId.generate() },
        ])}
      >
        Добавить уведомление
      </L.Button>
    </L.Div>
  );
};
