import React from 'react'
import { storiesOf } from '@storybook/react'
import TextInput from './TextInput'
import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf('TextInput', module)
  .add('default', () => (
    <TextInput />
  ))
