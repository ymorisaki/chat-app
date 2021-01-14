import React, {useState, useEffect} from 'react';
import {List} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem';

import {messagesRef} from '../firebase';

console.log(MessageItem)

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .on('value', (snapShot) => {
        if (snapShot.val() === null) return;

        const entries = Object.entries(snapShot.val());
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;

          return { key: key, ...nameAndText };
        });

        setMessages(newMessages);
      });
  }, []);

  const length = messages.length;

  return (
  <List className={classes.root}>
    {
      messages.map(({key, name, text}, index) => {
        const isLastItem = length === index + 1;
        return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />
      })
    }
  </List>
  );
};

export default MessageList;
