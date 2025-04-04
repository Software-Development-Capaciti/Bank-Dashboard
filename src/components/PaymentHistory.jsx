import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const PaymentHistory = ({ accounts }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const allTransactions = [];
      for (const account of accounts) {
        try {
          const response = await axios.get(`http://localhost:8080/api/accounts/${account.id}/transactions`);
          allTransactions.push(...response.data.map(tx => ({ ...tx, accountNumber: account.accountNumber })));
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      }
      setTransactions(allTransactions);
    };
    if (accounts.length > 0) fetchTransactions();
  }, [accounts]);

  return (
    <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Payment History</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>{tx.accountNumber}</TableCell>
              <TableCell>{tx.type}</TableCell>
              <TableCell>${tx.amount.toFixed(2)}</TableCell>
              <TableCell>{new Date(tx.date).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PaymentHistory;