import * as React from 'react';
import * as L from '../../../leda';
import { Form } from '../../../leda/components/Validation/types';

export const ShouldValidateUnmounted = () => {
  const [selected, setSelected] = React.useState(0);
  const [invalidFormInfo, setInvalidFormInfo] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const setInvalidFormData = (data: Form[] | null): void => {
    const message = (() => {
      if (data) {
        setIsValid(false);
        return `Invalid form: ${data[0].name}`;
      }

      setIsValid(true);
      return 'all mounted and unmounted fields are valid';
    })();

    setInvalidFormInfo(message);
  };

  return (
    <L.Div _box _inner>
      <L.Div>
        <L.Tabs
          activeTabKey={selected}
          onSelect={(event: any) => {
            setSelected(event.component.value);
          }}
        >
          <L.Tab title="Tab 1" tabKey={0}>
            <L.Div _inner>
              <L.Div _inner>
                <L.Input
                  value={value1}
                  onChange={(event) => {
                    setValue1(event.component.value);
                  }}
                  validator="email"
                  form="unmountedForm"
                  name="Input1"
                  isRequired
                  placeholder="unmounted 1"
                  shouldValidateUnmounted
                />
              </L.Div>
            </L.Div>
          </L.Tab>
          <L.Tab title="Tab 2" tabKey={1}>
            <L.Div _inner>
              <L.Div _inner>
                <L.Input
                  value={value2}
                  onChange={(event) => {
                    setValue2(event.component.value);
                  }}
                  validator="email"
                  form="unmountedForm"
                  name="Input2"
                  isRequired
                  placeholder="unmounted 2"
                  shouldValidateUnmounted
                />
              </L.Div>
            </L.Div>
          </L.Tab>
        </L.Tabs>

        <L.Div>
          <L.Div _inner>
            <L.Button
              form="unmountedForm"
              onClick={() => {
                setInvalidFormData(null);
              }}
              onValidationFail={(event) => {
                setInvalidFormData(event.invalidForms);
                console.info(event.invalidForms);
              }}
              _warning
            >
              Validate unmounted components
            </L.Button>
          </L.Div>
        </L.Div>

        <L.Div _inner _txtSuccess={isValid} _txtDanger={!isValid}>
          {invalidFormInfo}
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
