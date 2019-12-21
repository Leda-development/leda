import * as React from 'react';
import { Div } from '../Div';
import { ProgressLoaderProps } from './types';

export const ProgressLoader = (props: ProgressLoaderProps): React.ReactElement | null => {
  const {
    isLoading, loadingData, theme,
  } = props;

  if (!isLoading) return null;

  const loaded = loadingData?.loaded ?? 0;

  const total = loadingData?.total ?? 0;

  const radius = 34;
  const offset = 35;
  const circleLength = 2 * Math.PI * radius;

  return (
    <Div className={theme.progressLoader}>
      <Div className={theme.progressBase} />
      <svg className={theme.progressCircle}>
        <circle
          r={radius}
          cx={offset}
          cy={offset}
          style={{
            strokeDasharray: circleLength, strokeDashoffset: circleLength - circleLength * (loaded / total),
          }}
          transform={`rotate(-90 ${offset} ${offset})`}
        />
      </svg>
    </Div>
  );
};
