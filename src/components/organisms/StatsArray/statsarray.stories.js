import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import StatsArray from './StatsArray'

const humanStats = {
  strength: {
    input: 10,
    race: 0,
    total: 10,
  },
  dexterity: {
    input: 10,
    race: 0,
    total: 10,
  },
  constitution: {
    input: 10,
    race: 0,
    total: 10,
  },
  intelligence: {
    input: 10,
    race: 0,
    total: 10,
  },
  wisdom: {
    input: 10,
    race: 0,
    total: 10,
  },
  charisma: {
    input: 10,
    race: 0,
    total: 10,
  },
}

storiesOf('StatsArray', module)
  .add('default', () => (
    <div className="container">
      <StatsArray
        stats={humanStats}
        raceModActive="true"
      />

    </div>
  ))
