import React, { useState } from 'react';
import * as L from '../../leda';

export const Icon = () => {
  const [icon, setIcon] = useState<L.IconTypes.Icons>(L.IconTypes.Icons.Star);
  const [size, setSize] = useState<number | null>(24);
  const [width, setWidth] = useState<number | null>(2);
  const [fill, setFill] = useState<string>();
  const [stroke, setStroke] = useState<string>();

  return (
    <L.Div _demo-story>
      <L.H4 _story-title>Icon</L.H4>
      <br />
      <L.Div
        _flex-row
        _margin-bottom
      >
        <L.DropDownSelect
          data={Object.values(L.IconTypes.Icons)}
          onChange={({ component: { value } }) => setIcon(value)}
          defaultValue={L.IconTypes.Icons.Star}
          _width-15
          _margin-right
        />

        <L.NumericTextBox
          onChange={({ component: { value } }) => setSize(value)}
          placeholder='Size, default is 24'
          defaultValue={24}
          _width-15
          _margin-right
        />

        <L.NumericTextBox
          onChange={({ component: { value } }) => setWidth(value)}
          placeholder='Width, default is 2'
          defaultValue={2}
          _width-15
          _margin-right
        />

        <L.Input
          onChange={({ component: { value } }) => setFill(value)}
          placeholder='red or #ff0000'
          _width-15
          _margin-right
        />

        <L.Input
          onChange={({ component: { value } }) => setStroke(value)}
          placeholder='green or rgb(34, 139, 34)'
          _width-15
          _margin-right
        />
      </L.Div>

      <L.Icon
        icon={icon}
        size={size}
        fill={fill}
        stroke={stroke}
        strokeWidth={width}
        _hi-there
      />
    </L.Div>
  );
};
