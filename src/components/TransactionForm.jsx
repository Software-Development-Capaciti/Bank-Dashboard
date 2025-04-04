import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';

const TransactionForm = ({ accounts, onTransactionComplete }) => {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accountId || !amount || !transactionType) {
      alert('Please fill all fields');
      return;
    }

    try {
      const url = transactionType === 'deposit' 
        ? `http://localhost:8080/api/accounts/${accountId}/deposit`
        : `http://localhost:8080/api/accounts/${accountId}/withdraw`;
      
      await axios.post(url, null, { params: { amount } });
      setAccountId('');
      setAmount('');
      setTransactionType('');
      onTransactionComplete();
    } catch (error) {
      console.error('Transaction error:', error);
      alert('Transaction failed');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Make a Transaction</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Account</InputLabel>
        <Select
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          label="Account"
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
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Transaction Type</InputLabel>
        <Select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          label="Transaction Type"
        >
          <MenuItem value="deposit">Deposit</MenuItem>
          <MenuItem value="withdraw">Withdraw</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default TransactionForm;