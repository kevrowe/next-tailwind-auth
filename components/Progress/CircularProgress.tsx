interface Props {
  color?: string
  trackColor?: string
  progress: number
  size: number
  strokeWidth?: number
}

const CircularProgress = (props: Props) => {
  const {
    size,
    progress,
    strokeWidth = 2,
    color = "rgb(37 99 235)",
    trackColor = "rgb(159 161 165)",
  } = props

  const r = 50
  const c = 2 * Math.PI * (r - strokeWidth)
  const dashoffset = c * ((100 - progress) / 100)

  return (
    <div className="relative">
      <svg
        className="size-full"
        width={size}
        height={size}
        viewBox={`0 0 100 100`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r={r - strokeWidth}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={trackColor}
        ></circle>
        <g className="origin-center -rotate-90 transform">
          <circle
            cx="50"
            cy="50"
            r={r - strokeWidth}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={c}
            strokeDashoffset={dashoffset}
          ></circle>
        </g>
      </svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-2xl font-bold text-gray-800">
          {progress}%
        </span>
      </div>
    </div>
  )
}

export { CircularProgress }
