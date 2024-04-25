import { CircularProgress } from "@/components/Progress/CircularProgress"
import { HTMLAttributes } from "react"

type Props = {
  /**
   * Accent color
   */
  color?: string
  /**
   * Progress circle track color
   */
  trackColor?: string
  /**
   * Progress value from 0 to 100
   */
  progress: number
  /**
   * Content to display next to progress circle in string or JSX format.
   * If using a render function, props will be passed to it.
   */
  content?: string | JSX.Element | ((props: Props) => JSX.Element)
  /**
   * Props passed to the wrapper `Paper` component
   */
  wrapperProps?: HTMLAttributes<HTMLDivElement>
}

const FormProgress = (props: Props) => {
  const { progress, color, content, trackColor } = props
  return (
    <div className="flex bg-white border-gray-300 border-2 text-gray-800 p-md rounded-sm">
      <CircularProgress
        progress={progress}
        color={color}
        trackColor={trackColor}
        size={100}
        strokeWidth={7}
      />
      {typeof content === "function" ? content(props) : content}
    </div>
  )
}

export { FormProgress }
