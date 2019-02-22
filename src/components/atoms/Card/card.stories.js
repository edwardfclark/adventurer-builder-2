import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from './Card'

storiesOf('Card', module)
    .add('default', () => (
        <div className="container">
            <Card><h1>Test</h1></Card>
        </div>
    )).add('types', () => (
        <div className="container">
            <Card>
                <Card type="header">
                    <h1>Header.</h1>
                </Card>
                <Card type="body">
                    <p>Body.</p>
                </Card>
                <Card type="footer">
                    <h3>Footer.</h3>
                </Card>
            </Card>

        </div>
    ))
        