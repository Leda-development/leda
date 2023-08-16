import { isString } from 'lodash';
import { getClassNames } from './helpers';
import type { SomeObject } from '../commonTypes';
import { underscorePropToClassName } from './underscorePropToClassName';

// collects all _classes and merges them with classes from props.className and writes them to props.className
export const mergeClassNames = <Props>(props: Props): Props & { className?: string } => {
  const classNames: Set<string> = new Set();
  const restProps: { [prop: string]: unknown } = {};
  const componentProps = props as unknown as SomeObject;

  Object.keys(componentProps)
    .forEach((prop: string): void => {
      // If the attribute starts with the special character _ and is true
      if (componentProps[prop] && prop[0] === '_' && componentProps[prop] === true) {
        const transformedClassName = underscorePropToClassName(prop);

        classNames.add(transformedClassName);

        // if attribute = false but starts with _ or it is a className, then do nothing
      } else if ((componentProps[prop] === false && prop[0] === '_')) {

        // pass the other attributes unchanged
      } else {
        restProps[prop] = componentProps[prop];
      }
    });

  const restClassName = isString(restProps.className) ? restProps.className : null;

  const propsWithoutUnderscore: Props = restProps as unknown as Props;

  return {
    ...propsWithoutUnderscore,
    className: getClassNames(...classNames, restClassName),
  };
};
