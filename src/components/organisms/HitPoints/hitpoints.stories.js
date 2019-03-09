import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import HitPoints from './HitPoints'

const con14Magus = {
  level: 1,
  hd: 8,
  con: 2,
  favoredClass: {
    hp: 1,
    skills: 0,
  },
}

const con16Barb = {
  level: 6,
  hd: 12,
  con: 3,
  favoredClass: {
    hp: 3,
    skills: 3,
  },
}

storiesOf('HitPoints', module)
  .add('Con 14 Magus', () => (
    <HitPoints {...con14Magus} />
  )).add('Con 16 Barb', () => (
    <HitPoints {...con16Barb} />
  ))
