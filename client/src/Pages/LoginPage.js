import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function LoginPage({handleLogged, isLoggedIn}) {

  const [loginInfo, setLoginInfo] = useState({username: "", password:""})

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInfo({...loginInfo, [name]: value})
  }

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginInfo)
    handleLogged(isLoggedIn)
  }

  const navigate = useNavigate()
  const loginUser = (loginInfo) => {
    fetch('/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginInfo)
    })
      .then(res => res.json())
      navigate('/')
  }

  const handleSignInButton = (e) => {
    navigate('/signup')
  }


  return (
     <form onSubmit={handleLogin}>
     <Stack
        direction="column"
        justifyContent="center"
        alignItems="center" 
        spacing={4}
        style={{ minHeight: '50vh'}}
        >
         
       <TextField id="outlined-basic" name="username" value={loginInfo.username} label="Username" variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" name="password" value={loginInfo.password} label="Password" variant="outlined" type="password" onChange={handleChange}/>
      <Button type="submit" variant="contained">Login</Button> 
      <h5>or</h5>
      {/* <br></br>
      <h5>If you are new to SnackPong</h5> */}
      <Button onClick={handleSignInButton} variant="contained">Sign Up</Button>
     
      </Stack>
      </form>
   
  )
}

export default LoginPage