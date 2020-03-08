import React from "react";

const SvgDefs = () => {
  return (
    <svg className="visually-hidden" width="0" height="0">
      <defs>
        <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--rf-color-brand-secondary)" />
          <stop offset="100%" stopColor="var(--rf-color-brand)" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,.05)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
        </linearGradient>
      </defs>
      <filter id="dropshadow-1" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="2" result="offsetblur" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>
  );
};

export default SvgDefs;
