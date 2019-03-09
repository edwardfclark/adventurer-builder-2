import React from 'react'
import classObj from '../../../utilities/classObj'
import Label from '../../atoms/Label/Label'

const calculateSave = (saveType, statMod, level) => {
  if (saveType === 'good') {
    return 2 + Math.floor(level / 2) + statMod
  }
  return Math.floor(level / 3) + statMod
}

const Saves = (props) => {
  const {
    charClass, con, dex, wis, level,
  } = props
  const hero = {
    fort: classObj[charClass].fort,
    ref: classObj[charClass].ref,
    will: classObj[charClass].will,
  }

  return (
    <div className="row">
      <div className="col">
        <Label>Fort:</Label>
        {' '}
        {calculateSave(hero.fort, con, level)}
      </div>
      <div className="col">
        <Label>Reflex:</Label>
        {' '}
        {calculateSave(hero.ref, dex, level)}
      </div>
      <div className="col">
        <Label>Will:</Label>
        {' '}
        {calculateSave(hero.will, wis, level)}
      </div>
    </div>
  )
}

export default Saves
