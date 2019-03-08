import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import FeatItem from './FeatItem'

const featsArr = ["Power Attack", "Combat Reflexes", "Improved Initiative"]

storiesOf('FeatItem', module)
    .add('default', () => (
        <FeatItem levelGranted={1} featType="Combat" feats={featsArr}/>
    ))