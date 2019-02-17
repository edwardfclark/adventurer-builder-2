import React from 'react'
import Select from '../../atoms/Select/Select'
import Option from '../../atoms/Option/Option'
import Label from '../../atoms/Label/Label'
import NumberInput from '../../atoms/NumberInput/NumberInput'

// This is a Molecule, and so must have its own Row according to design guidelines.
// 'handle' is a generic name passed to the onChange value of the atom. This will be a repeating design pattern.
// To use a StatSelector, you must pass props.label, props.handleSelect, props.raceVal, props.handleNumberInput, props.raceModActive, and props.statVal.

const StatSelector = (props) => {
  const total = props.selectedStatVal + props.raceVal

  return (
    <div className="row mb-1">
      {/* Label */}
      <div className="col">
        <Label>{props.label}</Label>
      </div>
      {/* Stat Value Selector */}
      <div className="col">
        <Select defaultValue={props.selectedStatVal} handle={props.handleSelect}>
          <Option value={7}>7</Option>
          <Option value={8}>8</Option>
          <Option value={9}>9</Option>
          <Option value={10}>10</Option>
          <Option value={11}>11</Option>
          <Option value={12}>12</Option>
          <Option value={13}>13</Option>
          <Option value={14}>14</Option>
          <Option value={15}>15</Option>
          <Option value={16}>16</Option>
          <Option value={17}>17</Option>
          <Option value={18}>18</Option>
        </Select>
      </div>
      {/* Race Input */}
      <div className="col">
        <NumberInput
          min="-4"
          max="4"
          value={props.raceVal}
          handle={props.handleNumberInput}
          readOnly={!props.raceModActive}
        />
      </div>
      {/* Total Calculated Value */}
      <div className="col">
        {`${total} (${Math.floor((total - 10) / 2)})`}
      </div>
    </div>
  )
}

export default StatSelector
