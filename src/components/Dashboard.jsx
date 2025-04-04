import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, AppBar, Toolbar, IconButton, Avatar, TextField } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';
import Sidebar from './Sidebar';
import LimitsSection from './LimitsSection';
import BankCard from './BankCard';
import TotalRevenue from './TotalRevenue';
import PaymentHistory from './PaymentHistory';
import TransactionForm from './TransactionForm';
import TransferForm from './TransferForm';
import CreateAccountForm from './CreateAccountForm';
import AIChatPlaceholder from './AIChatPlaceholder';
import axios from 'axios';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/accounts');
      setAccounts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Sidebar />
      <Box sx={{ 
        flexGrow: 1, 
        p: { xs: 2, md: 4 }, 
        bgcolor: '#f5f5f5', 
        overflowY: 'auto',
        minHeight: '100vh',
      }}>
        {/* Enhanced AppBar with shadow, rounded corners, and better spacing */}
        <AppBar 
          position="static" 
          sx={{ 
            bgcolor: 'white', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
            mb: 4, 
            borderRadius: 2,
            py: 1,
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                flexGrow: 1, 
                color: '#333', 
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              Dashboard
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{ 
                  bgcolor: '#f5f5f5', 
                  borderRadius: 1, 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { border: 'none' },
                    '&:hover fieldset': { border: 'none' },
                    '&.Mui-focused fieldset': { border: 'none' },
                  },
                }}
                InputProps={{
                  startAdornment: <Search sx={{ color: 'gray', mr: 1 }} />,
                  sx: { color: '#333', fontSize: '0.9rem' },
                }}
              />
              <IconButton sx={{ color: '#333' }}>
                <Notifications />
              </IconButton>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ color: '#333', fontSize: '0.9rem', fontWeight: 500 }}>
                  Andrew Forbist
                </Typography>
                <Avatar 
                  alt="Andrew Forbist" 
                  src="/path-to-avatar.jpg" 
                  sx={{ width: 36, height: 36, border: '2px solid #673ab7' }} 
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {loading ? (
          <Typography 
            sx={{ 
              textAlign: 'center', 
              color: '#666', 
              fontSize: '1.2rem', 
              mt: 4 
            }}
          >
            Loading...
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {/* Limits Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                transition: 'transform 0.3s', 
                '&:hover': { transform: 'translateY(-5px)' } 
              }}>
                <LimitsSection />
              </Box>
            </Grid>

            {/* Cards Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                bgcolor: 'white', 
                p: 3, 
                borderRadius: 2, 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    color: '#333', 
                    fontWeight: 600,
                    borderBottom: '1px solid #e0e0e0',
                    pb: 1,
                  }}
                >
                  Cards
                </Typography>
                {accounts.map((account) => (
                  <BankCard key={account.id} account={account} />
                ))}
              </Box>
            </Grid>

            {/* AI Chat Placeholder */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                transition: 'transform 0.3s', 
                '&:hover': { transform: 'translateY(-5px)' } 
              }}>
                <AIChatPlaceholder />
              </Box>
            </Grid>

            {/* Upload Data Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                bgcolor: 'white', 
                p: 3, 
                borderRadius: 2, 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    color: '#333', 
                    fontWeight: 600,
                    borderBottom: '1px solid #e0e0e0',
                    pb: 1,
                  }}
                >
                  Upload Data
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#666', 
                    fontSize: '0.9rem', 
                    mb: 2 
                  }}
                >
                  Click to upload or drag and drop .xls, .xlsx, .csv or pdf (max. 100mb)
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#333', 
                      fontWeight: 500 
                    }}
                  >
                    30 days data 2024
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666', 
                      fontSize: '0.85rem' 
                    }}
                  >
                    Nov, xls 300 KB
                  </Typography>
                  <Box sx={{ 
                    bgcolor: '#673ab7', 
                    width: '50%', 
                    height: 10, 
                    borderRadius: 5, 
                    mt: 1, 
                    mx: 'auto',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#333', 
                      fontWeight: 500, 
                      mt: 1 
                    }}
                  >
                    50%
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Total Revenue */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                transition: 'transform 0.3s', 
                '&:hover': { transform: 'translateY(-5px)' } 
              }}>
                <TotalRevenue accounts={accounts} />
              </Box>
            </Grid>

            {/* Payment History */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                transition: 'transform 0.3s', 
                '&:hover': { transform: 'translateY(-5px)' } 
              }}>
                <PaymentHistory accounts={accounts} />
              </Box>
            </Grid>

            {/* Transaction Form */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                bgcolor: 'white', 
                p: 3, 
                borderRadius: 2, 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}>
                <TransactionForm accounts={accounts} onTransactionComplete={fetchAccounts} />
              </Box>
            </Grid>

            {/* Transfer Form */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                bgcolor: 'white', 
                p: 3, 
                borderRadius: 2, 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}>
                <TransferForm accounts={accounts} onTransferComplete={fetchAccounts} />
              </Box>
            </Grid>

            {/* Create Account Form */}
            <Grid item xs={12} md={4}>
              <Box sx={{ 
                bgcolor: 'white', 
                p: 3, 
                borderRadius: 2, 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}>
                <CreateAccountForm onAccountCreated={fetchAccounts} />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;