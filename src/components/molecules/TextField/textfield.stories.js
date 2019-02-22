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
  )).add('Alternate Classes', () => (
    <div className="container">
      <TextField label="Even Cols" labelClass="col" inputClass="col" />
      <TextField label="Label 10, Input 2. The row has to be longer, though, to illustrate that this is happening. Long live the label." labelClass="col-10" inputClass="col-2" />
      <TextField label="Label 3, Input 9" labelClass="col-3" inputClass="col-9" />
    </div>
  ))
