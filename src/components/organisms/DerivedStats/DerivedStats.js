import React from 'react'
import Defense from '../Defense/Defense'
import Offense from '../Offense/Offense'
import Card from '../../atoms/Card/Card'

const DerivedStats = (props) => {
  const {
    level, statMods, hd, bab, favoredClass, ac, charClass, maxDexBonus, size,
  } = props
  return (
    <React.Fragment>
      <Card>
        <Card type="body">
          <Defense
            level={level}
            statMods={statMods}
            hd={hd}
            favoredClass={favoredClass}
            ac={ac}
            charClass={charClass}
            maxDexBonus={maxDexBonus}
            size={size}
            bab={bab}
          />
        </Card>
        <Card type="footer">
          <Offense
            bab={bab}
            statMods={statMods}
          />
        </Card>
      </Card>
    </React.Fragment>
  )
}

export default DerivedStats
