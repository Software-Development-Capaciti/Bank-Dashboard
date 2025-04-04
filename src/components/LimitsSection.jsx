import React from 'react';
import { Box, Typography } from '@mui/material';

const LimitsSection = () => {
  return (
    <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Limits</Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2">Credit limit</Typography>
        <Box sx={{ bgcolor: '#ef5350', height: 10, borderRadius: 5, width: '80%' }} />
        <Typography variant="body2">$2,500 / $5,000</Typography>
      </Box>
      <Box>
        <Typography variant="body2">Spend</Typography>
        <Box sx={{ bgcolor: '#42a5f5', height: 10, borderRadius: 5, width: '60%' }} />
        <Typography variant="body2">$1,500 / $5,000</Typography>
      </Box>
    </Box>
  );
};

export default LimitsSection;