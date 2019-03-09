import React from 'react'
import Label from '../../atoms/Label/Label'
import Select from '../../atoms/Select/Select'

// Useful component consisting of a Select element attached to a text input. Each is contained in a column.
// The label property gives the label its text.
// Pass an array of <Option> elements to props.options.
// Pass a defaultValue to props.defaultVal

const SelectField = (props) => {
  const {
    label, defaultVal, options, labelClass, inputClass,
  } = props
  return (
    <div className="row mb-1">
      <div className={labelClass || 'col-3'}>
        <Label>{label}</Label>
      </div>
      <div className={inputClass || 'col-9'}>
        <Select defaultValue={defaultVal}>{options}</Select>
      </div>
    </div>
  )
}

export default SelectField
