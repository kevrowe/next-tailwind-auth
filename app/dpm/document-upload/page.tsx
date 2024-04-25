import { FormProgress } from "@/components/Form/Progress/FormProgress"

const DocumentUpload = () => {
  const progressContent = (
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
  )

  return (
    <div>
      <h1>Document Upload</h1>
      <FormProgress
        progress={50}
        color="rgb(79 70 229)"
        content={progressContent}
      />
    </div>
  )
}

export default DocumentUpload
