import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import StatSelector from './StatSelector'

storiesOf('StatSelector', module)
  .add('default', () => (
    <div className="container">
      <StatSelector
        label="Strength"
        raceVal={0}
        raceModActive="true"
        selectedStatVal={10}
        statVal={10}
      />
    </div>
  )).add('raceModActive is false', () => (
    <div className="container">
      <StatSelector
        label="Strength:"
        raceVal={0}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
    </div>
  )).add('Stack', () => (
    <div className="container">
      <StatSelector
        label="Strength:"
        raceVal={0}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
      <StatSelector
        label="Dexterity:"
        raceVal={0}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
      <StatSelector
        label="Constitution:"
        raceVal={2}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
      <StatSelector
        label="Intelligence:"
        raceVal={0}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
      <StatSelector
        label="Wisdom:"
        raceVal={2}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
      <StatSelector
        label="Charisma:"
        raceVal={-2}
        raceModActive="false"
        selectedStatVal={10}
        statVal={10}
      />
    </div>
  ))
