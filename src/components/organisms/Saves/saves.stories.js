import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Saves from './Saves';

const fighter = {
    level: 1,
    con: 2,
    dex: 4,
    wis: 0,
    charClass: "fighter"
}

const ranger = {
    level: 3,
    con: 1,
    dex: 3,
    wis: 2,
    charClass: "ranger"
}

storiesOf('Saves', module)
    .add('Fighter', () => (
        <Saves {...fighter}/>
    )).add('Ranger', () => (
        <Saves {...ranger}/>
    ))