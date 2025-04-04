import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const BankCard = ({ account }) => {
  return (
    <Box sx={{
      bgcolor: '#f5f5f5',
      borderRadius: 2,
      p: 2,
      mb: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Box>
        <Typography variant="body1">{account.type} ending in {account.accountNumber.slice(-4)}</Typography>
        <Typography variant="body2" color="textSecondary">EXP: 12/26</Typography>
      </Box>
      <IconButton>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default BankCard;