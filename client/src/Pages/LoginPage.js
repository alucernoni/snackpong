import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';

function LoginPage() {
  return (
    
    <Stack
        direction="column"
        justifyContent="center"
        alignItems="center" 
        spacing={4}
        style={{ minHeight: '50vh'}}
        >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
      <Button variant="contained">Login</Button> 
      </Stack>
      
   
  )
}

export default LoginPage