import React, { useState } from 'react'
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'

export default () => {
  const [name, setName] = useState('')
  console.log(name)

  if (name === '' && config.signInEnaled) {
    return <SignIn setName={setName} />
  } else {
    return <Main name={name} />
  }
}
