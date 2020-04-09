import * as React from 'react';
import { htmlTagFactory } from '../../src/HTMLTagsFactory';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<DivRefCurrent>,
  shouldRender?: boolean,
  [x: string]: unknown,
}

export interface DivRefCurrent {
  wrapper: HTMLDivElement | null,
}

export const Tag = htmlTagFactory('Div') as React.FC<DivProps>;

export const Div: React.FC<DivProps> = React.forwardRef((props: DivProps, ref: React.Ref<any>): React.ReactElement | null => {
  const { shouldRender, ...restProps } = props;
  if (shouldRender === false) return null;
  return <Tag {...restProps} ref={ref} />;
});
