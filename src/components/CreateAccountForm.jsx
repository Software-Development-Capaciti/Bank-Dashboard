import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const CreateAccountForm = ({ onAccountCreated }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [type, setType] = useState('');
  const [initialBalance, setInitialBalance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accountNumber || !type || !initialBalance) {
      alert('Please fill all fields');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/accounts/create', null, {
        params: { accountNumber, type, initialBalance }
      });
      setAccountNumber('');
      setType('');
      setInitialBalance('');
      onAccountCreated();
    } catch (error) {
      console.error('Create account error:', error);
      alert('Failed to create account');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Create New Account</Typography>
      <TextField
        fullWidth
        label="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Type (e.g., Savings, Checking)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Initial Balance"
        type="number"
        value={initialBalance}
        onChange={(e) => setInitialBalance(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Create Account
      </Button>
    </Box>
  );
};

export default CreateAccountForm;