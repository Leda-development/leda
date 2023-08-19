'use client';

// declarative setInterval on hooks, runs callback with delay interval, pass null into delay to stop running callback

import { useEffect, useRef } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: (...args: any[]) => any, delay: number | null) => {
  const savedCallback = useRef<typeof callback>();

  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback],
  );

  useEffect(
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
