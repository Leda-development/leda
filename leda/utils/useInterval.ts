'use client';

import * as React from 'react';

// declarative setInterval on hooks, runs callback with delay interval, pass null into delay to stop running callback
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: (...args: any[]) => any, delay: number | null) => {
  const savedCallback = React.useRef<typeof callback>();

  React.useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback],
  );

  React.useEffect(
    () => {
      const handler = (...args: unknown[]) => savedCallback.current?.(...args);

      if (delay !== null) {
        const id = setInterval(handler, delay);
        return () => clearInterval(id);
      }

      return undefined;
    },
    [delay],
  );
};
