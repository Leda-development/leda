import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const MyOwnWrapper = ({ someCustomPropHere, ...props }: any) => <L.Button _warning {...props} />;

const MyOwnInfo = (props: any) => <L.Span {...props} />;

export const FullCustomized = (anyProps: any) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.FileUpload
        allowedFiles=".jpg, .gif, .png"
        wrapperRender={({
          elementProps, componentProps,
        }: any) => <MyOwnWrapper {...elementProps} someCustomPropHere="blah-blah-blah" isLoading={componentProps.isLoading} />}
        infoRender={({
          elementProps, componentProps,
        }: any) => <MyOwnInfo {...elementProps}>{componentProps.isLoading ? 'Идёт загрузка...' : 'Загрузить?'}</MyOwnInfo>}
        maxFileSize={1500}
        onFileLoad={(event) => {
          console.log('Вы загрузили файл!', event.component.value.acceptedFiles, event.component.value.rejectedFiles);
          setProps({ isLoading: true });
          setTimeout(() => {
            setProps({ isLoading: false });
            alert(event.component.value.acceptedFiles.length !== 0 ? 'Файл загружен!' : 'При загрузке возникла ошибка!');
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
