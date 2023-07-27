import * as React from 'react';
import * as L from '../../leda';

export const StickyPanel = () => {
  const [isFull, setIsFull] = React.useState(true);

  return (
    <L.Div _demo-story _width-50={!isFull}>
      <L.H4 _story-title>StickyPanel</L.H4>
      <L.Switcher
        onChange={() => setIsFull(!isFull)}
        value={isFull}
      />
      <textarea
        placeholder="Можно растягивать по высоте, offsetTop - 200"
        style={{
          width: '100%', minWidth: '100%', maxWidth: '100%', height: '500px',
        }}
      />
      <L.StickyPanel offsetTop={200}>
        <L.Div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <L.Button _success>Button 1</L.Button>
          <L.Button>Button 2</L.Button>
          <L.Button>Button 3</L.Button>
        </L.Div>
      </L.StickyPanel>
    </L.Div>
  );
};
