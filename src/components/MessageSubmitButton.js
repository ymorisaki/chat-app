import React from 'react';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import {pushMessage} from '../firebase';

const MessageSubmitButton = ({name, text, setText, inputEl}) => {
  return (
    <>
      <IconButton
        disabled={text === ''}
        aria-label="メッセージ送信"
        onClick={() => {
          pushMessage({name, text});
          setText('');
          inputEl.current.focus();
        }}
      >
        <SendIcon />
      </IconButton>
    </>
  )
}

export default MessageSubmitButton;
