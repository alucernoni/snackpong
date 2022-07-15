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
        navigate('/homepage')
      } else {
        res.json().then((err) => setErrors(err.errors))  
        navigate('/signup')
      }
    })
    
  }

  return (
    <form onSubmit={handleSignUp}>

    <Stack direction="row"
     justifyContent="center">
     <img 
     className="signup-left-pic"
     src= "https://cdn-images-1.medium.com/max/800/1*1qtwaTyAPAftfqV4-Bj6IQ.png" />

     <Stack
        className="signup-stack"
        direction="column"
        justifyContent="center"
        alignItems="center" 
        spacing={2}
        style={{ minHeight: '50vh'}}
        >

      <img 
      className= "signup-logo" 
      src="https://cdn-images-1.medium.com/max/800/1*CX7mis8ChSe57sej3GHreQ.png" />
         
       <TextField id="outlined-basic" name="username" value={signUpInfo.username} label="Username" variant="outlined" onChange={handleChange}/>

      <TextField id="outlined-basic" name="password" value={signUpInfo.password} label="Password" variant="outlined" type="password" onChange={handleChange}/>

      <TextField id="outlined-basic" name="password_confirmation" value={signUpInfo.password_confirmation} label="Password Confirmation" variant="outlined" type="password" onChange={handleChange}/>

      <Stack
      direction="row"
      spacing={2}
      style={{ minHeight: '2vh'}}>

      <Button type="submit" variant="contained">Register!</Button> 
      </Stack>
      </Stack>

      <img 
      className= "signup-right-pic" 
      src="https://cdn-images-1.medium.com/max/800/1*3cHw9iEz5Pw9wSYx6QeEBA.png" />
    </Stack>

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
    
      </form>
  )
}

export default SignupPage