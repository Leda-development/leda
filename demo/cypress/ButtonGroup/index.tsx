/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';

export const ButtonGroup = (): React.ReactElement => {
  const [value, setValue] = React.useState<string>('one');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  return (
    <L.Div _demoStory>
      <L.ButtonGroup
        data={['one', 'two', 'three']}
        _primary
        isDisabled={isDisabled}
      />
      <br />
      <br />
      <L.ButtonGroup
        data={[
          { data: 'one' },
          { data: 'two' },
          { data: 'three' },
        ]}
        textField="data"
        isDisabled={isDisabled}
        _warning
      />
      <br />
      <br />
      <L.ButtonGroup
        data={['one', 'two', 'three']}
        isDisabled={isDisabled}
        defaultValue={['two']}
        type="checkbox"
      />
      <br />
      <br />
      <L.ButtonGroup
        data={['one', 'two', 'three']}
        value={value}
        onChange={ev => setValue(ev.component.value)}
      />
      <br />
      <br />
      <L.Switcher value={isDisabled} onChange={ev => setIsDisabled(ev.component.value)}>isDisabled</L.Switcher>
    </L.Div>
  );
};
