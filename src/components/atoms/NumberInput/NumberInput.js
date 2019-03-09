import React from 'react'

const NumberInput = (props) => {
  const { className } = props
  return (
    <input
      type="number"
      className={className || 'form-control form-control-sm'}
      onChange={props.handle}
      {...props}
    />
  )
}

export default NumberInput
