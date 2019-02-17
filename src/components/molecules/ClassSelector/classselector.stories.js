import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import ClassSelector from './ClassSelector'

storiesOf('ClassSelector', module)
  .add('default', () => (
    <ClassSelector
      label="Class:"
      options={[<option>Option 1</option>, <option>Option 2</option>, <option>Option 3</option>]}
    />
  ))
