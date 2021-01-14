import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

import {pushMessage} from '../firebase'

const MessageField = ({setText, text, name, inputEl}) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;

        if (
          e.key === 'Enter' &&
          e.target.value !== ''
        ) {
          pushMessage({name, text})
          e.preventDefault();
          setText('');
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true)
      }}
      onCompositionEnd={() => {
        setIsComposed(false)
      }}
      value={text}
    />
  )
};

export default MessageField;