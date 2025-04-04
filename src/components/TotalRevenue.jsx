import React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const TotalRevenue = ({ accounts }) => {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Total Revenue</Typography>
      <Typography variant="h4">${totalBalance.toFixed(2)}</Typography>
      <Typography color="success.main">+15% vs last week</Typography>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr'] }]}
        series={[{ data: [4000, 3000, 5000, totalBalance] }]}
        width={300}
        height={200}
      />
    </Box>
  );
};

export default TotalRevenue;