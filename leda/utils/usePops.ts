import { mergeClassNames } from './mergeClassNames';

// get all _classNames, join with props.className an put into props.className
export const useProps = <Props>(props: Props) => mergeClassNames(props);
