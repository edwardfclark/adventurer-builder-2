import React from 'react'
import Label from '../../atoms/Label/Label'

const calculateSizeMod = (size) => {
  if (size === 'medium') {
    return 0
  } if (size === 'large') {
    return 1
  }
  return -1
}

const calculateACtoCMD = (ac) => {
  return ac.dodge + ac.deflection + ac.luck + ac.morale + ac.insight + ac.sacred
}

const CMDAndInitiative = (props) => {
  const {
    bab, str, dex, size, ac,
  } = props
  console.log(calculateSizeMod(size))
  return (
    <div className="row">
      <div className="col-4">
        <Label>CMD:</Label>
        {' '}
        {10 + bab + str + dex + calculateSizeMod(size) + calculateACtoCMD(ac)}
      </div>
      <div className="col-8">
        <Label>Initiative:</Label>
        {' '}
        {dex}
      </div>
    </div>
  )
}

export default CMDAndInitiative
