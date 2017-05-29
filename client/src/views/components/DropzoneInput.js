import React from "react"
import shortid from "shortid"
import Dropzone from "react-dropzone"

const DropzoneInput = (field) => {
  const files = field.input.value

  return (
    <div>
      <Dropzone
        // multiple={false}
        // accept="image/*"
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
      >
        <div>
          Drop a file here, or click to select.
        </div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map(file => <li key={shortid.generate()}>{file.name}</li>) }
        </ul>
      )}
    </div>
  )
}

export default DropzoneInput
