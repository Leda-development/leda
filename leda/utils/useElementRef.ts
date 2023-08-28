'use client';

import * as React from 'react';

// special helper for using DOM element ref after mount
export const useElementRef = (): [HTMLElement | null, (component: HTMLElement | null) => void] => {
  const [Element, setElement] = React.useState<HTMLElement | null>(null);

  const ref = React.useCallback((component: HTMLElement | null) => {
    setElement(component);
  }, []);

  return [Element, ref];
};
