import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, Payment, SwapHoriz, CreditCard, Savings, Inbox, Insights } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, bgcolor: '#f5f5f5', height: '100vh', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#673ab7' }}>
        WALTER
      </Typography>
      <List>
        {[
          { text: 'Dashboard', icon: <Dashboard /> },
          { text: 'Payments', icon: <Payment /> },
          { text: 'Transactions', icon: <SwapHoriz /> },
          { text: 'Cards', icon: <CreditCard /> },
          { text: 'Saving Plans', icon: <Savings /> },
          { text: 'Inbox', icon: <Inbox /> },
          { text: 'Insights', icon: <Insights /> },
        ].map((item) => (
          <ListItem button key={item.text} sx={{ bgcolor: item.text === 'Dashboard' ? '#673ab7' : 'transparent', color: item.text === 'Dashboard' ? 'white' : 'black', borderRadius: 1 }}>
            <ListItemIcon sx={{ color: item.text === 'Dashboard' ? 'white' : 'black' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;