import React from 'react';
import { isNil } from 'lodash';
import type * as L from '../../index';
import {
  DropDownSelect,
} from '../DropDownSelect';
import type { PagesDropDownProps } from './types';

export const PagesDropDown = (props: PagesDropDownProps): React.ReactElement => {
  const {
    handlePageSizeChange,
    isPageSizeChangeable,
    msg,
    pageSize,
    pageSizeOptions,
    theme,
  } = props;

  const handleChange = (ev: L.DropDownSelectTypes.ChangeEvent<string>) => {
    handlePageSizeChange({
      component: {
        value: parseInt(ev.component.value, 10),
      },
    });
  };

  return (
    <div className={theme.optionsWrapper}>
      { isPageSizeChangeable && (
        <>
          <DropDownSelect
            data={pageSizeOptions && pageSizeOptions.map((item) => item.toString())}
            value={isNil(pageSize) ? pageSize : pageSize.toString()}
            onChange={handleChange}
            placeholder={msg.pageSizeAll}
            className={theme.options}
          />
          <div className={theme.optionsLabel}>
            {msg.pageSize}
          </div>
        </>
      )}
    </div>
  );
};
