import React, {useRef, useEffect} from 'react'
import {ListItem, ListItemText, ListItemAvatar, Avatar, Typography, makeStyles} from '@material-ui/core';
import {gravatarPath} from '../gravatar';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({name, text, key, isLastItem}) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  const ref = useRef(null);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [isLastItem]);

  return (
      <ListItem className={classes.rot} divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar alt="" src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
          }
        />
      </ListItem>
  )
};

export default MessageItem;
