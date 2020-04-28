/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/label-has-for */
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as L from '../leda';
import {
  AutoComplete, ButtonGroup, CheckBox, DatePicker, DateRange,
  DropDown, DropDownSelect, Input, A, LedaProvider, Loader, MaskedInput, Modal,
  MultiSelect, Notifications, NumericRange, NumericTextBox, Password,
  Pagination, Radio, ProgressBar, Slider, StatusBar, StickyPanel, Switcher,
  Tabs, Tags, DropZone, Textarea, DateTimePicker, TimePicker,
  DateTimeRange, TimeRange, DropDownLink, Currency, Rating,
  Div, Table, Dl, FileUpload, HTMLTags, Validation,
  Collapsible, Collapse, VStepper, Button, Tooltip, FileDrop, Tour,
} from './components';
import { useElementRef } from '../leda/utils';




export const Demo = hot(() => {
  const [element4, ref4] = useElementRef();
  const [activeStep, setActiveStep] = React.useState<string | number | null>(null);


  const t = {
    stepKey: '1',
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 1</L.H1>
        какой-то текст тут
        <L.Ul _list-h>
          <L.Li>
            <L.Button onClick={props.stopTour}>
              Закрыть
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.next}>
              Далее
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'top',
    element: element4,
  };
  return (
    <L.Div style={{color: 'black'}} _wrapper>
      {/*<Navigation />*/}
      <L.Div _container>
        <L.Div _row _demoMainTitle _noGutters>
          <L.H1 _colMd12 ref={ref4}>Demo sandbox</L.H1>
          <L.Button _warning onClick={() => setActiveStep('1')}>
            Начать гайд-тур
          </L.Button>

          <L.Tour
            data={[t]}
            activeStepKey={activeStep}
            onChange={(ev) => setActiveStep(ev.component.value)}
          />

          <L.P _colMd12>
            Специально созданная страница для тестирования компонентов, дебага и написания кода
          </L.P>
        </L.Div>
        <HTMLTags/>
        <A/>
        <AutoComplete/>
        <Button/>
        <ButtonGroup/>
        <CheckBox/>
        <Collapse/>
        <Collapsible/>
        <Currency/>
        <DateTimePicker/>
        <DateTimeRange/>
        <DatePicker/>
        <DateRange/>
        <Div/>
        <Dl/>
        <DropDown/>
        <DropDownLink/>
        <DropDownSelect/>
        <DropZone/>
        <FileDrop/>
        <FileUpload/>
        <Input/>
        <LedaProvider/>
        <Loader/>
        <MaskedInput/>
        <Modal/>
        <MultiSelect/>
        <Notifications/>
        <NumericRange/>
        <NumericTextBox/>
        <Pagination/>
        <Password/>
        <ProgressBar/>
        <Radio/>
        <Rating/>
        <Slider/>
        <StatusBar/>
        <StickyPanel/>
        <Switcher/>
        <Table/>
        <Tabs/>
        <Tags/>
        <Textarea/>
        <TimePicker/>
        <TimeRange/>
        <Tooltip/>
        <Tour/>
        <Validation/>
        <VStepper/>
      </L.Div>
    </L.Div>
  );
});
