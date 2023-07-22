import { mergeClassNames } from './mergeClassNames';

export const useProps = <Props>(props: Props) => {
  // get all _classNames, join with props.className an put into props.className
  return mergeClassNames(props);
};
