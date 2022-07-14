import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function SignupPage({onSignUp}) {

  const [signUpInfo, setSignUpInfo] = useState({username:"", password:"", password_confirmation:""})
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignUpInfo({...signUpInfo, [name]: value})
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpUser(signUpInfo)
    setIsLoading(true)
  }

  const navigate = useNavigate()
  const signUpUser = (signUpInfo) => {
    fetch('/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signUpInfo)
    })
    .then(res => {
      setIsLoading(false)
      if (res.ok) {
        res.json().then((user) => onSignUp(user))
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
      navigate('/homepage')
  }

  return (
    <form onSubmit={handleSignUp}>
     <Stack
        direction="column"
        justifyContent="center"
        alignItems="center" 
        spacing={4}
        style={{ minHeight: '50vh'}}
        >
         
       <TextField id="outlined-basic" name="username" value={signUpInfo.username} label="Username" variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" name="password" value={signUpInfo.password} label="Password" variant="outlined" type="password" onChange={handleChange}/>
      <TextField id="outlined-basic" name="password_confirmation" value={signUpInfo.password_confirmation} label="Password Confirmation" variant="outlined" type="password" onChange={handleChange}/>
      <Button type="submit" variant="contained">Sign Up</Button> 
      <Stack
      direction="column"
        justifyContent="center"
        alignItems="center" 
        spacing={4}
        style={{ minHeight: '50vh'}}>
     {errors.map((err) => {
     return <Alert severity="error">{`${err}`}</Alert>
     })}
      </Stack>
      </Stack>
      </form>
  )
}

export default SignupPage