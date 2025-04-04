import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';

const TransferForm = ({ accounts, onTransferComplete }) => {
  const [fromAccountId, setFromAccountId] = useState('');
  const [toAccountId, setToAccountId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fromAccountId || !toAccountId || !amount || fromAccountId === toAccountId) {
      alert('Please fill all fields correctly');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/accounts/transfer', null, {
        params: { fromAccountId, toAccountId, amount }
      });
      setFromAccountId('');
      setToAccountId('');
      setAmount('');
      onTransferComplete();
    } catch (error) {
      console.error('Transfer error:', error);
      alert('Transfer failed');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Transfer Money</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>From Account</InputLabel>
        <Select
          value={fromAccountId}
          onChange={(e) => setFromAccountId(e.target.value)}
          label="From Account"
        >
          {accounts.map((account) => (
            <MenuItem key={account.id} value={account.id}>
              {account.type} - {account.accountNumber}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>To Account</InputLabel>
        <Select
          value={toAccountId}
          onChange={(e) => setToAccountId(e.target.value)}
          label="To Account"
        >
          {accounts.map((account) => (
            <MenuItem key={account.id} value={account.id}>
              {account.type} - {account.accountNumber}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Transfer
      </Button>
    </Box>
  );
};

export default TransferForm;