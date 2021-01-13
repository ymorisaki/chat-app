import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const MessageField = ({setText, text, name}) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;

        if (
          e.key === 'Enter' &&
          e.target.value !== ''
        ) {
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