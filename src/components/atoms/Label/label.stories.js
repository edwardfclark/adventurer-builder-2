import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Label from './Label'

storiesOf('Label', module)
  .add('default', () => (
    <Label>Hello World</Label>
  )).add('bolder', () => (
    <Label style={{ fontWeight: 'bold' }}>Hello World</Label>
  ))
