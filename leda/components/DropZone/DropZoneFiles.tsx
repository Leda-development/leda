import React from 'react';
import { Ul } from '../Ul';
import { Li } from '../Li';
import { A } from '../A';
import { Tooltip } from '../Tooltip';
import { globalDefaultTheme } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DropZoneFilesProps } from './types';

const createDownloadLink = (blob: Blob, fileName: string, theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone]): React.ReactElement => {
  const isIE = window.navigator && (window.navigator as Navigator & { msSaveOrOpenBlob?: any}).msSaveOrOpenBlob;

  const linkProps = isIE
    ? { onClick: (): boolean => (window.navigator as Navigator & { msSaveOrOpenBlob: any}).msSaveOrOpenBlob(blob, fileName) }
    : { href: URL.createObjectURL(blob), download: fileName };

  return (
    <A theme={theme.fileDownloadLink} {...linkProps}>
      {fileName}
    </A>
  );
};

const renderFiles = (props: DropZoneFilesProps): React.ReactElement[] => {
  const {
    files, theme, onChange, value,
  } = props;

  return files.map((file, index): React.ReactElement => {
    const blob = new Blob([file.name], { type: file.type });

    const downloadLink = file.link || createDownloadLink(blob, file.name, theme);

    return (
      <Li key={`${file.name}-${index.toString()}`}>
        <Tooltip title="Удалить" position="top">
          <A _pointer onClick={(ev: React.MouseEvent<HTMLAnchorElement>): void => onChange(value.acceptedFiles, value.rejectedFiles, ev, file)}>
            <i className={theme.fileDeleteIcon} />
          </A>
        </Tooltip>
        <Tooltip title="Скачать" position="top">
          {downloadLink}
        </Tooltip>
      </Li>
    );
  });
};

export const DropZoneFiles = (props: DropZoneFilesProps): React.ReactElement => (props.shouldRender && (
  <Ul>
    {renderFiles(props)}
  </Ul>
)) as React.ReactElement;
