export function Cursor(props: {
  fill?: string;
  x: number;
  y: number;
  size?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${props.x}px, ${props.y}px)`,
        transition: "transform 0.15s ease-out, opacity 0.15s",
        top: 0,
        left: 0,
      }}
    >
      <svg
        width={props.size || 32}
        height={(props.size || 32) + 1}
        viewBox="0 0 24 25"
        transform="rotate(-25)"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M11.3125 0.318192L19.0397 16.9318L13.4339 13.7167C12.1317 12.9698 10.5209 13.0149 9.2626 13.8335L4.5 16.9318L11.3125 0.318192Z"
            fill={props.fill || "#3995D8"}
          />
          <path
            d="M5.57059 15.6389L11.3413 1.56577L17.9221 15.7144L13.6826 13.2829C12.2177 12.4427 10.4056 12.4935 8.98994 13.4144L5.57059 15.6389Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.5"
            y="0.318192"
            width="22.5397"
            height="24.6136"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
