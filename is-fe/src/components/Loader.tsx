import React from 'react';
import { CircularProgress, Container } from '@mui/material';
import { Box } from '@mui/system';

const Loader = () => (
  <Container
    maxWidth="lg"
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <Box marginTop={4}>
      <CircularProgress />
    </Box>
  </Container>
);

export default Loader;
