import React from 'react';
import { Typography, Box } from '@mui/material';

const AccountSummary = ({ accounts }) => {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Account Summary</Typography>
      <Typography>Total Accounts: {accounts.length}</Typography>
      <Typography>Total Balance: ${totalBalance.toFixed(2)}</Typography>
    </Box>
  );
};

export default AccountSummary;