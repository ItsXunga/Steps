import React from "react";

export const PinColor = (props) => {
  return (
    <svg
      style={{ marginRight: ".25rem" }}
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_429_1731)">
        <rect
          x="8.09637"
          y="8.09637"
          width="20.0441"
          height="19.1063"
          rx="9.55315"
          fill={props.color}
        />
      </g>
      <g filter="url(#filter1_f_429_1731)">
        <ellipse
          cx="18.1753"
          cy="17.6494"
          rx="3.50927"
          ry="3.32742"
          fill="white"
        />
        <path
          d="M20.7209 17.6494C20.7209 18.9072 19.6301 20.0132 18.1753 20.0132C16.7204 20.0132 15.6297 18.9072 15.6297 17.6494C15.6297 16.3916 16.7204 15.2857 18.1753 15.2857C19.6301 15.2857 20.7209 16.3916 20.7209 17.6494Z"
          stroke="#D0D1D8"
          stroke-width="1.92731"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_429_1731"
          x="0.483478"
          y="0.483478"
          width="35.2694"
          height="34.3321"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.75826" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.647059 0 0 0 0 0.65098 0 0 0 0 0.964706 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_429_1731"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_429_1731"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_429_1731"
          x="13.8951"
          y="13.5511"
          width="8.55943"
          height="8.19664"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.385463"
            result="effect1_foregroundBlur_429_1731"
          />
        </filter>
      </defs>
    </svg>
  );
};
