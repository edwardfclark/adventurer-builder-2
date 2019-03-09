import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Defense from './Defense'

// You need to pass level, statMods, ac, charClass, and hd for Defense to work.

const fighter = {
  level: 1,
  statMods: {
    str: 4,
    dex: 2,
    con: 2,
    int: -1,
    wis: 3,
    cha: -1,
  },
  ac: {
    armor: 9,
    shield: 2,
    deflection: 1,
    dodge: 0,
    luck: 0,
    sacred: 0,
    natural: 0,
    morale: 0,
    insight: 0,
  },
  charClass: 'fighter',
  hd: 10,
  maxDexBonus: 1,
  favoredClass: {
    hp: 1,
    skills: 0,
  },
  size: 'medium',
  bab: 1,
}

storiesOf('Defense', module)
  .add('fighter', () => (
    <Defense {...fighter} />
  ))
