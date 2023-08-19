import type {
  ElementType, ForwardRefExoticComponent, ReactElement, Ref, RefAttributes,
} from 'react';
import { forwardRef } from 'react';
import { useProps } from '../../utils/usePops';

export const htmlTagFactory = (tagName: string): ForwardRefExoticComponent<RefAttributes<unknown>> => {
  const tagComponent = forwardRef(<P, R>(props: P, ref: Ref<R>): ReactElement | null => {
    const newProps = useProps<P>(props);

    const { shouldRender, ...restProps } = newProps as P & { shouldRender?: boolean };

    if (shouldRender === false) return null;

    const ElementName = tagName.toLowerCase() as ElementType;

    return (
      <ElementName
        {...restProps}
        ref={ref}
      />
    );
  });

  tagComponent.displayName = tagName;

  return tagComponent;
};
