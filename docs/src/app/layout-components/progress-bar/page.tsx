'use client';

import * as L from '@leda';
import { H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection } from '@/sections';

const ProgressBarPage = () => (
  <article>
    <H1>ProgressBar</H1>

    <PropsTableSection>
      <tr>
        <Td><b>value</b></Td>
        <Td>number</Td>
        <Td>How much progress is done</Td>
      </tr>
    </PropsTableSection>

    <Live scope={{ L }}>
      {`
() => {
  // Ref is used to store data out of the component context
  // it is required for correct setInterval work
  const state = React.useRef({ value: 25, interval: null }).current;
  const [value, setValue] = React.useState(25);

  const resetProgress = () => {
    state.value = 0;
    setValue(state.value);
  };

  const stopProgress = () => {
    clearInterval(state.interval || 0);
    state.interval = null;
  };

  const incrementProgress = () => {
    const nextProgress = state.value + 1;
    if (nextProgress === 100) stopProgress();
    state.value = nextProgress;
    setValue(nextProgress);
  };

  const launchProgress = () => {
    if (state.value === 100) {
      resetProgress();
    }
    if (!state.interval) {
      state.interval = window.setInterval(incrementProgress, 250);
    } else {
      stopProgress();
    }
  };
  
  return (
    <>
      <L.ProgressBar value={value} valueRender={() => null} />
      <br />
      <br />
      <L.Button onClick={launchProgress}>{state.interval !== null ? 'Stop' : 'Launch'} progress</L.Button>
      {' '}
      <L.Button onClick={resetProgress}>Reset progress</L.Button>
    </>
  );
}`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>valueRender</Td>
        <Td>{'CustomRender<ProgressBarProps, {}, ValueLabelProps>'}</Td>
        <Td>...</Td>
      </tr>
    </CustomizationPropsTableSection>
  </article>
);

export default ProgressBarPage;
