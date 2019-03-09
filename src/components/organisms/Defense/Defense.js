import React from 'react'
import HitPoints from '../HitPoints/HitPoints'
import ArmorClass from '../ArmorClass/ArmorClass'
import Saves from '../Saves/Saves'
import CMDAndInitiative from '../CMDAndInitiative/CMDAndInitiative'

const Defense = (props) => {
  const {
    level, statMods, ac, charClass, hd, favoredClass, maxDexBonus, size, bab,
  } = props

  return (
    <React.Fragment>
      <HitPoints
        level={level}
        con={statMods.con}
        hd={hd}
        favoredClass={favoredClass}
      />
      <ArmorClass
        ac={ac}
        dex={statMods.dex}
        maxDexBonus={maxDexBonus}
      />
      <Saves
        charClass={charClass}
        con={statMods.con}
        dex={statMods.dex}
        wis={statMods.wis}
        level={level}
      />
      <CMDAndInitiative
        bab={bab}
        str={statMods.str}
        dex={statMods.dex}
        size={size}
        ac={ac}
      />
    </React.Fragment>
  )
}

export default Defense
