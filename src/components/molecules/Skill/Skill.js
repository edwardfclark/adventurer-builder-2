import React from 'react'

import Label from '../../atoms/Label/Label'
import NumberInput from '../../atoms/NumberInput/NumberInput'

const Skill = (props) => {
  const { skill, attribute, attr } = props
  return (
    <div className="row mb-1">
      <div className="col">
        {/* Skill */}
        <Label>{skill}</Label>
      </div>
      <div className="col">
        {/* Ranks */}
        <NumberInput />
      </div>
      <div className="col">
        {/* Attribute */}
        {`${attribute.slice(0,3).toUpperCase()} ${attr >= 0 ? "+" : ""} ${attr}`}
      </div>
      <div className="col">
        {/* Misc Bonuses */}
        ###
      </div>
      <div className="col"> 
        {/* Total */}
        ###
      </div>
    </div>
  )
}

export default Skill
