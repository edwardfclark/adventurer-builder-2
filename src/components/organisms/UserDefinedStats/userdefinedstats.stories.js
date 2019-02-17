import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import UserDefinedStats from './UserDefinedStats'

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

storiesOf('UserDefinedStats', module)
  .add('default', () => (
    <div className="container">
      <UserDefinedStats
        stats={humanStats}
        raceModActive
      />
    </div>
  ))
