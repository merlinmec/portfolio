import React from 'react';

export const BrazilFlag = (props) => (
  <svg viewBox="0 0 36 36" width="18" height="18" role="img" aria-hidden="true" {...props}>
    <clipPath id="br-circle-clip">
      <circle cx="18" cy="18" r="18" />
    </clipPath>
    <g clipPath="url(#br-circle-clip)">
      <rect width="36" height="36" fill="#009C3B" />
      <polygon points="18,4 34,18 18,32 2,18" fill="#FFDF00" />
      <circle cx="18" cy="18" r="8" fill="#002776" />
    </g>
  </svg>
);

export const USAFlag = (props) => (
  <svg viewBox="0 0 36 36" width="18" height="18" role="img" aria-hidden="true" {...props}>
    <clipPath id="us-circle-clip">
      <circle cx="18" cy="18" r="18" />
    </clipPath>
    <g clipPath="url(#us-circle-clip)">
      <rect width="36" height="36" fill="#B22234" />
      <g fill="#fff">
        <rect y="2.77" width="36" height="2.77" />
        <rect y="8.31" width="36" height="2.77" />
        <rect y="13.85" width="36" height="2.77" />
        <rect y="19.38" width="36" height="2.77" />
        <rect y="24.92" width="36" height="2.77" />
        <rect y="30.46" width="36" height="2.77" />
      </g>
      <rect width="18" height="19.38" fill="#3C3B6E" />
    </g>
  </svg>
);
