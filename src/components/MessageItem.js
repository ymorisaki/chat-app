import React from 'react'
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

const MessageItem = ({name, text, key}) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
      <ListItem className={classes.rot} divider={true}>
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
