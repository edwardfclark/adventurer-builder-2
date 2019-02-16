import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SelectField from './SelectField'

storiesOf('SelectField', module)
  .add('default', () => (
    <div className="container">
      <SelectField label="Default:" />
    </div>
  )).add('six-stack', () => (
    <div className="container">
      <SelectField label="Each SelectField is a Row" />
      <SelectField label="Each SelectField is a Row" />
      <SelectField label="Each SelectField is a Row" />
      <SelectField label="Each SelectField is a Row" />
      <SelectField label="Each SelectField is a Row" />
      <SelectField label="Each SelectField is a Row" />
    </div>
  )).add('With Options', () => (
    <SelectField
      label="SelectField with Options: "
      options={[
        <option value="1">Option 1</option>,
        <option value="2">Option 2</option>,
        <option value="3">Option 3</option>,
      ]}
    />
  ))
