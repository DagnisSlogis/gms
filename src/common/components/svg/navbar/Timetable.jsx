import React from "react";
import styled from "styled-components";

const TimetableSVG = styled.svg`
  fill: white;
`;

export const Timetable = props => (
  <TimetableSVG>
    <g>
      <rect x="236" y="230" width="40" height="40" />
      <path d="m452 40h-24v-40h-40v40h-264v-40h-40v40h-24c-33.084 0-60 26.916-60 60v352c0 33.084 26.916 60 60 60h205.76c-13.828-11.414-25.872-24.911-35.663-40h-170.1c-11.028 0-20-8.972-20-20v-264h432v42.099c15.088 9.791 28.586 21.836 40 35.663v-165.76c0-33.084-26.916-60-60-60zm20 108h-432v-48c0-11.028 8.972-20 20-20h24v40h40v-40h264v40h40v-40h24c11.028 0 20 8.972 20 20v48z" />
      <path d="m377 242c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135-60.561-135-135-135zm0 230c-52.383 0-95-42.617-95-95s42.617-95 95-95 95 42.617 95 95-42.617 95-95 95z" />
      <polygon points="396 310 356 310 356 397 430 397 430 357 396 357" />
      <rect x="156" y="310" width="40" height="40" />
      <rect x="76" y="310" width="40" height="40" />
      <rect x="76" y="230" width="40" height="40" />
      <rect x="76" y="390" width="40" height="40" />
      <rect x="156" y="230" width="40" height="40" />
      <rect x="156" y="390" width="40" height="40" />
    </g>
  </TimetableSVG>
);
