import React from 'react'
import Label from '../../atoms/Label/Label'
import TextInput from '../../atoms/TextInput/TextInput'

// Useful component consisting of a label attached to a text input. Each is contained in a column.
// The label property gives the label its text.

const TextField = (props) => {
  return (
    <div className="row mb-1">
      <div className="col-3">
        <Label>{props.label}</Label>
      </div>
      <div className="col-9">
        <TextInput />
      </div>
    </div>
  )
}

export default TextField
