/* eslint-disable max-len */
import * as React from 'react';
import { Div } from '../Div';
import { H1 } from '../Headers';

export const Donut = (): React.ReactElement => (
  <Div style={{ width: '500px' }} _wrapper _box>
    <style>
      {`
        @font-face {
          font-family: 'Ultra';
          font-style: normal;
          font-weight: 400;
          src:   url(https://fonts.gstatic.com/l/font?kit=zOLy4prXmrtY-tT_0MGryOZnn8VgoMPKVzuGyQ9vuSYQaomJF-F7i6joHFFixHmswn2vetp3ZaUcPnbohSyEukTqYx9XnMWDHFkjFa7DptKbAfL-lxtahcu8gFdAbYLyMBvE0mfYhSR3ttIk4X0B8EWzPcIfYjL2dLdMXRi_aOW8kfkq&skey=1443103a749670a&v=v12) format('woff2');
        }
        .rainbow {
            text-align: center;
            text-decoration: underline;
            font-size: 32px;
            font-family: monospace;
            letter-spacing: 5px;
        }
        .rainbow-text-animated {
            background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: rainbow_animation 6s ease-in-out infinite;
            background-size: 400% 100%;
        }
        
        @keyframes rainbow_animation {
            0%,100% {
                background-position: 0 0;
            }
        
            50% {
                background-position: 100% 0;
            }
        }
      `}
    </style>
    <H1 _rainbow _rainbowTextAnimated style={{ textAlign: 'center', fontFamily: '"Ultra"' }}>{'HAPPY PROGRAMMER\'S DAY!'}</H1>
    <img src="https://media.giphy.com/media/xUA7b3PacjKdugYSY0/giphy.gif" alt="donut animation" />
  </Div>
);
