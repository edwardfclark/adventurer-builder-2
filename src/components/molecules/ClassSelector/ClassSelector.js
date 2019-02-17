import React from 'react'
import Label from '../../atoms/Label/Label'
import Select from '../../atoms/Select/Select'
import NumberInput from '../../atoms/NumberInput/NumberInput'

const ClassSelector = (props) => {
  return (
    <div className="row mb-1">
      <div className="col-3">
        <Label>{props.label}</Label>
      </div>
      <div className="col-6">
        <Select defaultValue={props.defaultClass}>{props.options}</Select>
      </div>
      <div className="col-3">
        <NumberInput defaultValue={1} min={1} max={20} />
      </div>
    </div>
  )
}

export default ClassSelector
