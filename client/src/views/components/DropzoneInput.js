import React from "react"
import PropTypes from "prop-types"

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
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  )
}

export default DropzoneInput

// class App extends Component {
//
//   static propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     reset: PropTypes.func.isRequired,
//   }
//
//   onSubmit(data) {
//     var body = new FormData()
//     Object.keys(data).forEach(( key ) => {
//       body.append(key, data[ key ])
//     })
//
//     console.info("POST", body, data)
//     console.info("This is expected to fail:")
//     fetch(`http://example.com/send/`, {
//       method: "POST",
//       body: body,
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err))
//   }
//
//   render() {
//     const {
//       handleSubmit,
//       reset,
//     } = this.props
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <div>
//           <label htmlFor={FILE_FIELD_NAME}>Files</label>
//           <Field
//             name={FILE_FIELD_NAME}
//             component={renderDropzoneInput}
//           />
//         </div>
//         <div>
//           <button type="submit">
//             Submit
//           </button>
//           <button onClick={reset}>
//             Clear Values
//           </button>
//         </div>
//       </form>
//     )
//   }
// }
//
// export default reduxForm({
//   form: "simple",
// })(App)
