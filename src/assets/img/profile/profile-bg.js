import React from "react";

export const ProfileBG = () => {
  return (
    <>
      <svg
        style={{ position: "absolute", left: 0, top: "-40vh", zIndex: 0 }}
        width="100vw"
        height="auto"
        viewBox="0 0 375 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bi_972_2366)">
          <path
            d="M299.566 157.238C341.227 157.238 375 129.703 375 95.7365V0H0V157.238V213C5 182.356 33 158.745 60.5 157.238H299.566Z"
            fill="url(#paint0_linear_972_2366)"
          />
          <path
            d="M299.566 157.238C341.227 157.238 375 129.703 375 95.7365V0H0V157.238V213C5 182.356 33 158.745 60.5 157.238H299.566Z"
            fill="white"
            fill-opacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_bi_972_2366"
            x="-0.757639"
            y="-0.757639"
            width="376.515"
            height="214.515"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="0.37882" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_972_2366"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_972_2366"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_972_2366"
            />
          </filter>
          <linearGradient
            id="paint0_linear_972_2366"
            x1="187.142"
            y1="-122.685"
            x2="187.142"
            y2="107.035"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
