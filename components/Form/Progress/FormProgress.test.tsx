import { render, screen } from "@/test-utils"
import { FormProgress } from "./FormProgress"

describe("FormProgress component", () => {
  it("renders the progress prop", () => {
    render(<FormProgress progress={30} color="red" content="Completion" />)
    expect(screen.getByText("30%")).toHaveTextContent("30%")
  })
  it("renders the content prop", () => {
    render(<FormProgress progress={30} color="red" content="Completion" />)
    expect(screen.getByText("Completion", { exact: false })).toHaveTextContent(
      "Completion"
    )
  })
})
