import React from 'react'
import Label from '../../atoms/Label/Label'

const CMB = (props) => {
  const { bab, str } = props
  return (
    <div className="row">
      <div className="col">
        <Label>CMB:</Label>
        {' '}
        {bab + str}
      </div>
    </div>
  )
}

export default CMB
