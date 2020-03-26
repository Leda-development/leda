import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { RenderEvent } from '../../../leda/commonTypes';
import { FileLoadEvent } from '../../../leda/components/FileUpload/types';

export const PartialCustomized = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.FileUpload
        allowedFiles=".jpg, .gif, .png"
        wrapperRender={({ Element, elementProps }: any) => (
          <>
            <Element
              {...elementProps}
              _inner
              _block
              _width10
              style={{
                cursor: 'pointer', backgroundColor: '#1d9d59', color: 'white', borderRadius: '10px',
              }}
            >
              {React.Children.toArray(elementProps.children)[0]}
            </Element>
            {React.Children.toArray(elementProps.children)[1]}
          </>
        )}
        // @ts-ignore
        infoRender={({
          Element,
          elementProps,
          componentProps: { isLoading },
        }: RenderEvent<{isLoading: boolean}>) => <Element {...elementProps} props={elementProps}>{isLoading ? 'Я загружаю!' : 'Я частично изменен!'}</Element>}
        maxFileSize={1500}
        onFileLoad={(ev: FileLoadEvent) => {
          console.log('Вы загрузили файл!', ev.component.value.acceptedFiles, ev.component.value.rejectedFiles);
          setProps({ isLoading: true });
          setTimeout(() => {
            setProps({ isLoading: false });
            alert(ev.component.value.acceptedFiles.length !== 0 ? 'Файл загружен!' : 'При загрузке возникла ошибка!');
          }, 2000);
        }}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: {},
          },
          {
            text: 'Loading',
            props: { isLoading: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
