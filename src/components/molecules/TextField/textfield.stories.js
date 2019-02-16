import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TextField from './TextField'

storiesOf('TextField', module)
  .add('default', () => (
    <div className="container">
      <TextField label="Default:" />
    </div>
  )).add('six-stack', () => (
    <div className="container">
      <TextField label="Each TextField is a Row" />
      <TextField label="Each TextField is a Row" />
      <TextField label="Each TextField is a Row" />
      <TextField label="Each TextField is a Row" />
      <TextField label="Each TextField is a Row" />
      <TextField label="Each TextField is a Row" />
    </div>
  ))
