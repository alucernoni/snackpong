import React from 'react'
import {useEffect, useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import Container from '@mui/material/Container';
import PostCard from '../Components/PostCard'

function Profile({user, posts}) {

  const userPosts = posts.filter(post => post.user.id === user.id).map((post) => (<PostCard
          key={post.id}
          post={post}
        />))
 
  return (
    <React.Fragment>
      <Stack justifyContent="space-between" direction="column">
      <CssBaseline />
      <Container fixed variant='outlined'>
        <Box sx={{  height: '100vh' }}>
          <Card variant='outlined'>
            <CardContent>
              <Container>
                {<img
                alt=""
                src={user.profile_image_url}/>}
              </Container>
            <Typography  variant="h5" sx={{fontSize: 50, bgcolor: "transparent"}} component="div">
                {user.profile_name}
            </Typography>
            <Typography  variant="h1" sx={{fontSize: 20, bgcolor: "transparent"}} component="div">
                {user.bio}
            </Typography>
            <Stack alignItems="center" justifyContent="center" direction="column" >
                {userPosts}
            </Stack>
            </CardContent>
          </Card>
          
        </Box>
      </Container>
      </Stack>
    </React.Fragment>
  )
}

export default Profile