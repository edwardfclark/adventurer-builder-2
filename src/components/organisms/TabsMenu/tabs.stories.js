import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import TabsMenu from './TabsMenu'
import Skill from '../../molecules/Skill/Skill'

const skills = (
    <React.Fragment>
        <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
        <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
        <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
        <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
        <Skill skill="Disable Device" attribute={"dexterity"} attr={3}/>
    </React.Fragment>
);

storiesOf('TabsMenu', module)
    .add('default', () => (
        <div className="container">
            <TabsMenu skills={skills}/>
        
        </div>
    ))