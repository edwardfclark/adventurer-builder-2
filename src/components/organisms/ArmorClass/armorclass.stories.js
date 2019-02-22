import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import ArmorClass from './ArmorClass'

const fullPlateShieldFighter = {
    dex: 2,
    maxDexBonus: 1,
    ac: {
        armor: 9,
        shield: 2,
        deflection: 0,
        dodge: 0,
        luck: 0,
        sacred: 0,
        natural: 0
    }
}

const mithralChainShirtSwashbuckler = {
    dex: 5,
    maxDexBonus: null,
    ac: {
        armor: 4,
        shield: 0,
        deflection: 0,
        dodge: 0,
        luck: 0,
        sacred: 0,
        natural: 0
    }
}

storiesOf('ArmorClass', module)
    .add('default', () => (
        <ArmorClass {...fullPlateShieldFighter}/>
    )).add('Mithral Chain Shirt Swashbuckler', () => (
        <ArmorClass {...mithralChainShirtSwashbuckler} />
    ))