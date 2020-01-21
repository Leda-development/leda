/* eslint-disable no-alert,no-console */
import * as React from 'react';
import * as L from '../../../leda';

export const AutoComplete = (): React.ReactElement => {
  const [objectValue1, setObjectValue1] = React.useState<string | null>(null);
  const [objectValue4, setObjectValue4] = React.useState<string | null>(null);
  const [stringValue2, setStringValue2] = React.useState<string | null>(null);
  const [stringValue3, setStringValue3] = React.useState<string | null>(null);
  const [stringValue5, setStringValue5] = React.useState<string | null>(null);
  const [objectValue6, setObjectValue6] = React.useState<string | null>(null);
  const itemRender1 = ({ Element, elementProps, componentProps }) => {
    const { item, textField } = componentProps;

    return (
      <Element
        {...elementProps}
        _txtSuccess={item.region === 'Asia'}
        _txtBold={item.region === 'Europe'}
      >
        {item[textField]} (region: {item.region})
      </Element>
    );
  }
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const noSuggestionsRenderNull = () => null
  const noSuggestionsRenderVal = () => <L.Div _txtCenter _inner _nodata>набери что-то, что я знаю</L.Div>;
  const testFunction = (ev) => { console.log(ev) }
  return (
    <>
      <L.Div _demoStory _flexRow>     
        <L.AutoComplete
          data={[
            'London',
            'Magadan',
            'Berlin',
            'Washington',
            'Paris',
            'Rome',
            'Tokyo',
            'Budapest',
            'Ottawa',
            'Moscow',
          ]}
          name = 'AutoComplete1'
          onChange={ev => setStringValue2(ev.component.value)}
          filterRule={'startsWith'}
          hasClearButton
          minSearchLength={0}
          onBlur={ev => setStringValue2(ev.component.value)}
          placeholder="Type your city..."
          _width30
        />
        <L.AutoComplete
          data={[
            'London',
            'Islamabad',
            'Berlin',
          ]}
          name = 'AutoComplete2'
          onChange={ev => setStringValue3(ev.component.value)}
          filterRule={'smart'}
          minSearchLength={3}
          onBlur={(ev) => testFunction(ev) }
          shouldCorrectValue
          value={stringValue3}
          _width30
        />
        <L.AutoComplete
          data={[
            { name: 'Paris', region: 'Europe' },
            { name: 'Berlin', region: 'Europe' },
            { name: 'Prague', region: 'Europe' },
            { name: 'New York', region: 'America' },
            { name: 'Rome', region: 'Europe' },
            { name: 'London', region: 'Europe' },
            { name: 'Bangkok', region: 'Asia' },
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
          ]}
          name = 'AutoComplete3'
          onChange={(ev) => { setObjectValue4(ev.component.value); testFunction(ev)} }
          filterRule={'includes'}
          isOpen={isOpen}
          noSuggestionsRender={noSuggestionsRenderVal}
          onBlur={() => console.log('OnBlur+')}
          itemRender={itemRender1}
          placeholder="Type your city..."
          textField="name"
          shouldCorrectValue
          value={objectValue4}
          _width30
        />
      </L.Div>  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <L.Div _demoStory _flexRow>  
        <L.AutoComplete
          data={[
            'London',
            'Islamabad',
            'Berlin',
            'Washington',
            'Paris',
            'Rome',
            'Tokyo',
            'Budapest',
            'Ottawa',
            'Moscow',
          ]}
          name = 'AutoComplete4'
          onChange={ev => setStringValue5(ev.component.value)}
          isDisabled
          
          filterRule={'startsWith'}
          hasClearButton
          isOpen={isOpen}
          itemRender={({ Element, elementProps, componentProps }) => <Element {...elementProps} _txtSuccess>{componentProps.item}</Element>}
          noSuggestionsRender={noSuggestionsRenderVal}
          minSearchLength={3}
          onBlur={ev => setStringValue5(ev.component.value)}
          onFocus={()=> console.log('OnFocus+')}        
          placeholder="Type your city..."
          _width30
        />
        <L.AutoComplete
          data={[
            { name: 'Paris', region: 'Europe' },
            { name: 'Berlin', region: 'Europe' },
            { name: 'Prague', region: 'Europe' },
            { name: 'Rome', region: 'Europe' },
            { name: 'London', region: 'Europe' },
            { name: 'Bangkok', region: 'Asia' },
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
          ]}
          name = 'AutoComplete5'
          onChange={ev => setObjectValue6(ev.component.value)}
          isLoading
          filterRule={'includes'}
          hasClearButton
          isOpen={isOpen}
          itemRender={({ Element, elementProps, componentProps }) => <Element {...elementProps} _txtSuccess>{componentProps.item}</Element>}
          
          onBlur={() => console.log('OnBlur+')}
          onFocus={()=> console.log('OnFocus+')}
          shouldCorrectValue
          placeholder="Type your city..."
          textField="name"
          
          value={objectValue6}
          _width30
        />
        <L.AutoComplete
          data={[
            { name: 'Tokyo', region: 'Asia' },
            { name: 'Delhi', region: 'Asia' },
          ]}
          name='AutoComplete6' 
          onChange={ev => setObjectValue1(ev.component.value)}
          hasClearButton
          isOpen
          noSuggestionsRender={noSuggestionsRenderNull}
          minSearchLength={0}
          onFocus={(ev) => testFunction(ev) }
          shouldCorrectValue
          textField="name"
          value={objectValue1}
          _width30
        />
      </L.Div>
    </>
  );
};
