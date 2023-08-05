/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/label-has-for */
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as L from '../leda';
import {
  AutoComplete, ButtonGroup, Calendar, CheckBox, DatePicker, DateRange,
  DropDownSelect, Input, Icon, A, LedaProvider, Loader, MaskedInput, Modal,
  MultiSelect, Notifications, NumericRange, NumericTextBox, Password,
  Pagination, Radio, ProgressBar, Slider, Switcher,
  Tabs, Tags, DropZone, Textarea, DateTimePicker, TimePicker,
  DateTimeRange, TimeRange, Rating,
  Div, Table, Dl, FileUpload, HTMLTags, Validation,
  Collapsible, Collapse, Button, Tooltip, FileDrop, Tour,
} from './components';

export const Demo = hot(() => (
  <L.Div style={{ color: 'black' }} _wrapper>
    {/*<Navigation />*/}
    <L.Div _container>
      <L.Div _row _demo-main-title _no-gutters>
        <L.H1 _col-md-12>Demo sandbox</L.H1>
        <L.P _col-md-12>
          Специально созданная страница для тестирования компонентов, дебага и написания кода
        </L.P>
      </L.Div>
      <HTMLTags />
      <A />
      <AutoComplete />
      <Button />
      <ButtonGroup />
      <Calendar />
      <CheckBox />
      <Collapse />
      <Collapsible />
      <DateTimePicker />
      <DateTimeRange />
      <DatePicker />
      <DateRange />
      <Div />
      <Dl />
      <DropDownSelect />
      <DropZone />
      <FileDrop />
      <FileUpload />
      <Input />
      <Icon />
      <LedaProvider />
      <Loader />
      <MaskedInput />
      <Modal />
      <MultiSelect />
      <Notifications />
      <NumericRange />
      <NumericTextBox />
      <Pagination />
      <Password />
      <ProgressBar />
      <Radio />
      <Rating />
      <Slider />
      <Switcher />
      <Table />
      <Tabs />
      <Tags />
      <Textarea />
      <TimePicker />
      <TimeRange />
      <Tooltip />
      <Tour />
      <Validation />
    </L.Div>
  </L.Div>
));
