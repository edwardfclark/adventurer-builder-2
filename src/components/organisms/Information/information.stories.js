import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Information from './Information'

storiesOf('Information', module)
  .add('default', () => (
    <div className="container">
      <Information />
    </div>
  ))
