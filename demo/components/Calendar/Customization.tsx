import * as React from 'react';
import * as L from '../../../leda';

export const Customization = (props: any) => {

  return (
    <L.Div _box _inner _demoBg>
      <L.Calendar
        onChange={(ev) => {
          console.log('ev.component', ev.component);
        }}
        hasTodayButton
        wrapperRender={({ Element, elementProps, componentProps }) => {
          console.group('wrapperRender');
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          console.log('Element', Element);
          console.groupEnd();
          return (
            <Element {...elementProps} style={{ border: '2px solid green' }} />
          );
        }}
        dateViewRender={({ Element, elementProps, componentProps }) => {
          console.group('dateViewRender');
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          console.log('Element', Element);
          console.groupEnd();
          return (
            <Element {...elementProps} style={{ border: '1px solid gold' }} />
          );
        }}
        headerRender={({ Element, elementProps, componentProps }) => {
          console.group('headerRender');
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          console.log('Element', Element);
          console.groupEnd();
          return (
            <Element {...elementProps} style={{ border: '1px solid magenta' }} />
          );
        }}
        monthViewRender={({ Element, elementProps, componentProps }) => {
          console.group('monthViewRender');
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          console.log('Element', Element);
          console.groupEnd();
          return (
            <Element {...elementProps} style={{ border: '1px solid blue' }} />
          );
        }}
        yearViewRender={({ Element, elementProps, componentProps }) => {
          console.group('yearViewRender');
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          console.log('Element', Element);
          console.groupEnd();
          return (
            <Element {...elementProps} style={{ border: '1px solid cyan' }} />
          );
        }}
      />
    </L.Div>
  );
};
