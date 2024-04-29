import type { Meta, StoryObj } from "@storybook/react"
import { FormProgress } from "./FormProgress"

type Story = StoryObj<typeof FormProgress>

const meta: Meta<typeof FormProgress> = {
  title: "Form Progress",
  component: FormProgress,
}

const Usage: Story = {
  argTypes: {
    color: {
      options: [
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "green",
        "lime",
        "yellow",
        "orange",
        "teal",
      ],
    },
    content: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    progress: 33,
    color: "blue",
    content: (
      <div className="self-center p-2">
        <p>Estimated time</p>
        <p>
          <span className="text-indigo-600 font-bold">15 min </span>in total
        </p>
        <p>
          <span className="text-indigo-600 font-bold">5 min </span> for Document
          Upload
        </p>
      </div>
    ),
  },
}

export default meta
export { Usage }
