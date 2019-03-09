import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Skill from './Skill'

storiesOf("Skill", module)
    .add('default', () => (
        <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
    ))
    .add('table', () => (
        <div className="container">

            <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
            <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
            <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
            <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
            <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
            
        </div>
    ))