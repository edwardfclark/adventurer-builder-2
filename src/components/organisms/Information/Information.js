import React from 'react'
import TextField from '../../molecules/TextField/TextField'
import SelectField from '../../molecules/SelectField/SelectField'
import Option from '../../atoms/Option/Option'
import ClassSelector from '../../molecules/ClassSelector/ClassSelector'

import classObj from '../../../utilities/classObj'
import raceObj from '../../../utilities/raceObj'

const Information = (props) => {
  const alignments = [
    <Option value="LG">Lawful Good</Option>,
    <Option value="NG">Neutral Good</Option>,
    <Option value="CG">Chaotic Good</Option>,
    <Option value="LN">Lawful Neutral</Option>,
    <Option value="NN">True Neutral</Option>,
    <Option value="CN">Chaotic Neutral</Option>,
    <Option value="LE">Lawful Evil</Option>,
    <Option value="NE">Neutral Evil</Option>,
    <Option value="CE">Chaotic Evil</Option>,
  ]

  const races = Object.keys(raceObj).map((race) => {
    return <Option value={race}>{race}</Option>
  })

  const charClasses = Object.keys(classObj).map((charClass) => {
    return <Option value={charClass}>{charClass}</Option>
  })

  return (
    <React.Fragment>
      {/* Name TextField */}
      <TextField
        label="Name:"
        handle={props.handleNameChange}
      />
      {/* Alignment SelectField */}
      <SelectField
        label="Alignment:"
        defaultVal="NN"
        options={alignments}
      />
      {/* Race SelectField */}
      <SelectField
        label="Race:"
        defaultVal="human"
        options={races}
      />
      {/* Character Class SelectField */}
      <ClassSelector
        label="Class:"
        options={charClasses}
      />
    </React.Fragment>
  )
}

export default Information
