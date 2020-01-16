/* eslint-disable no-console,@typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import * as L from '../../../leda';
import { useInterval } from '../../../leda/utils/useInterval';

const exampleCode = `
interface ControlledFileDropProps {
  title?: string,
}

export interface Files {
  acceptedFiles: File[],
  rejectedFiles: File[],
}

export const ControlledFileDrop = (props: ControlledFileDropProps) => {
  const [files, setFiles] = React.useState<Files>({ acceptedFiles: [], rejectedFiles: [] });
  const [loaded, setLoaded] = React.useState<number>(0);
  const [shouldError, setShouldError] = React.useState<boolean>(false);
  const [maxFiles, setMaxFiles] = React.useState<number | null>(1);

  useInterval(() => setLoaded(loaded + 1), loaded < 50 && files.acceptedFiles.length > 0 ? 125 : null);

  const uploadError = shouldError && loaded === 50 ? new Error('Failed to upload file') : null;

  return (
    <L.Div _box _inner>
      <L.FileDrop
        allowedFiles=".jpg, .gif, .png"
        value={files}
        maxFileSize={1000000}
        loadingData={files.acceptedFiles.length > 0 ? {
          loaded,
          total: 50,
          error: uploadError,
        } : null}
        maxFileNameLength={25}
        onChange={ev => {
          console.log('droped', ev);
          setFiles(ev.component.value as Files);
          if (ev.component.value.acceptedFiles.length === 0) {
            setLoaded(0);
          }
        }}
      />
    </L.Div>
  );
};
`;

interface ControlledFileDropProps {
  title?: string,
}

export interface Files {
  acceptedFiles: File[],
  rejectedFiles: File[],
}

export const ControlledFileDrop = (props: ControlledFileDropProps) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [loaded, setLoaded] = React.useState<number>(0);
  const [shouldError, setShouldError] = React.useState<boolean>(false);

  useInterval(() => setLoaded(loaded + 1), loaded < 50 && file ? 125 : null);

  const uploadError = shouldError && loaded === 50 ? new Error('Сервер ответил со статусом 500.') : null;

  return (
    <L.Div _box _inner>
      <L.FileDrop
        allowedFiles=".jpg, .gif, .png"
        value={file}
        maxFileSize={1000000}
        loadingData={file ? {
          loaded,
          total: 50,
          error: uploadError,
        } : null}
        maxFileNameLength={25}
        // infoRender={({ Element, elementProps}) => (
        //   <Element {...elementProps}>
        //     Загрузите чтото-там <L.Button>тык</L.Button>
        //   </Element>
        // )}
        onChange={ev => {
          console.log('droped', ev);
          setFile(ev.component.value);
          if (!ev.component.value) {
            setLoaded(0);
          }
        }}
      />
      <br />
      <br />
      <L.Switcher value={shouldError} onChange={() => setShouldError(!shouldError)}>should fail</L.Switcher>
    </L.Div>
  );
};
