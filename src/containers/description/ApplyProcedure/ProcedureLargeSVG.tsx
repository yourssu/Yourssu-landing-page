const LINE_HEIGHT = 22;
const GAP_HEIGHT = 32;
const WIDTH = 20;

const MAIN_GRA_1 = '#f953ff';
const MAIN_GRA_2 = '#5a89ff';

function ProcedureLargeSVG({ count }: { count: number }) {
  const totalHeight = count * LINE_HEIGHT + GAP_HEIGHT * (count - 1);
  const totalArray = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <svg
      width={WIDTH}
      height={totalHeight}
      viewBox={`0 0 ${WIDTH} ${totalHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="svgGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={MAIN_GRA_1} />
          <stop offset="1" stopColor={MAIN_GRA_2} />
        </linearGradient>
      </defs>
      <mask
        id="mask_gradient"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={WIDTH}
        height={totalHeight}
      >
        <line
          x1={WIDTH / 2}
          y1={LINE_HEIGHT / 2}
          x2={WIDTH / 2}
          y2={totalHeight - 20}
          stroke="black"
        />
        {totalArray.map((num) =>
          num !== count ? (
            <circle
              key={num}
              cx={WIDTH / 2}
              cy={LINE_HEIGHT / 2 + (LINE_HEIGHT + GAP_HEIGHT) * (num - 1)}
              r="5"
              fill="black"
            />
          ) : (
            <circle
              key={num}
              cx={WIDTH / 2}
              cy={LINE_HEIGHT / 2 + (LINE_HEIGHT + GAP_HEIGHT) * (num - 1)}
              r="7.5"
              stroke="black"
              strokeWidth="5"
            />
          ),
        )}
      </mask>
      <g mask="url(#mask_gradient)">
        <rect width={WIDTH} height={totalHeight} fill="url(#svgGradient)" />
      </g>
    </svg>
  );
}

export default ProcedureLargeSVG;
