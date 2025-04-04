import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const AIChatPlaceholder = () => {
  return (
    <Box sx={{ 
      bgcolor: '#673ab7', 
      p: 3, 
      borderRadius: 2, 
      color: 'white', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between' 
    }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Ask Anything to AI
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Set as default
        </Typography>
      </Box>
      <Box>
        <TextField
          fullWidth
          placeholder="Ask anything"
          variant="outlined"
          sx={{
            bgcolor: 'white',
            borderRadius: 1,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
            },
          }}
          InputProps={{
            style: { color: 'black' },
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: 'white', color: '#673ab7', width: '100%' }}
        >
          Ask
        </Button>
      </Box>
    </Box>
  );
};

export default AIChatPlaceholder;