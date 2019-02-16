import React from 'react'
import Label from '../../atoms/Label/Label'
import Select from '../../atoms/Select/Select'

// Useful component consisting of a Select element attached to a text input. Each is contained in a column.
// The label property gives the label its text.
// Pass an array of <Option> elements to props.options.

const SelectField = (props) => {
  return (
    <div className="row mb-1">
      <div className="col">
        <Label>{props.label}</Label>
      </div>
      <div className="col">
        <Select>{props.options}</Select>
      </div>
    </div>
  )
}

export default SelectField
