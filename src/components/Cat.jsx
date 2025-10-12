const Cat = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="cat-svg"
    >
      {/* Left Ear */}
      <path
        d="M 60 60 L 40 20 L 70 50 Z"
        fill="#FF9500"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Right Ear */}
      <path
        d="M 140 60 L 160 20 L 130 50 Z"
        fill="#FF9500"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Head */}
      <circle
        cx="100"
        cy="80"
        r="40"
        fill="#FF9500"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Left Eye */}
      <ellipse
        cx="85"
        cy="75"
        rx="8"
        ry="12"
        fill="#333"
      />

      {/* Right Eye */}
      <ellipse
        cx="115"
        cy="75"
        rx="8"
        ry="12"
        fill="#333"
      />

      {/* Nose */}
      <path
        d="M 100 85 L 95 90 L 105 90 Z"
        fill="#FF6B9D"
      />

      {/* Mouth */}
      <path
        d="M 100 90 Q 90 95 85 92"
        stroke="#333"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 100 90 Q 110 95 115 92"
        stroke="#333"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Body */}
      <ellipse
        cx="100"
        cy="140"
        rx="35"
        ry="45"
        fill="#FF9500"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Left Leg */}
      <rect
        x="75"
        y="170"
        width="12"
        height="25"
        rx="6"
        fill="#FF9500"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Right Leg */}
      <rect
        x="113"
        y="170"
        width="12"
        height="25"
        rx="6"
        fill="#FF9500"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Tail */}
      <path
        d="M 130 130 Q 150 120 155 140 Q 160 155 145 160"
        stroke="#FF9500"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />

      {/* Whiskers Left */}
      <line x1="75" y1="82" x2="45" y2="80" stroke="#333" strokeWidth="1.5" />
      <line x1="75" y1="87" x2="45" y2="90" stroke="#333" strokeWidth="1.5" />

      {/* Whiskers Right */}
      <line x1="125" y1="82" x2="155" y2="80" stroke="#333" strokeWidth="1.5" />
      <line x1="125" y1="87" x2="155" y2="90" stroke="#333" strokeWidth="1.5" />
    </svg>
  );
};

export default Cat;
