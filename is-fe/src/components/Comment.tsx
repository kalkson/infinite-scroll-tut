import React, { FC } from 'react';
import { Box } from '@mui/system';
import { CommentType } from '../types';

const Comment: FC<Omit<CommentType, 'id'>> = ({ name, email, body }) => (
  <Box
    width="100%"
    marginY={4}
    padding={2}
    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <span>{name}</span>
    <span style={{ opacity: 0.4, fontSize: '0.7rem', marginTop: '6px' }}>
      {email}
    </span>
    <p>{body}</p>
  </Box>
);

export default Comment;
