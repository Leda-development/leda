/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Tooltip = () => {
  const [invisible, setInvisible] = React.useState<boolean>(false);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Tooltip</L.H4>
      <br />
      <L.Div _tooltipDemo>
        <L.Tooltip title="Tooltip at top top top top top top top top top top top top top top top top top top" position="top">
          <L.Button _tipTop>Top</L.Button>
        </L.Tooltip>
        <L.Div _tooltipLeftRight>
          <L.Tooltip title="Tooltip at left left left left left left left left left left left left left" position="left">
            <L.Button _tipLeft>Left</L.Button>
          </L.Tooltip>
          <L.Tooltip title="Tooltip at right right right right right right right right right right" position="right">
            <L.Button _tipRight>Right</L.Button>
          </L.Tooltip>
        </L.Div>
        <L.Tooltip title="Tooltip at bottom bottom bottom bottom bottom bottom bottom bottom bottom" position="bottom">
          {!invisible && <L.Button _tipBottom onClick={() => setInvisible(true)}>Bottom</L.Button>}
        </L.Tooltip>
      </L.Div>
    </L.Div>
  );
};
