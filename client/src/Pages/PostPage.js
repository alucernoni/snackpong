import React from 'react'
import PostCard from '../Components/PostCard'
import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import CommentList from '../Components/CommentList'
import ReplyList from '../Components/ReplyList'
import Box from '@mui/material/Box';
import { deepPurple } from '@mui/material/colors';

function PostPage({user, comments, title, content, xp, views}) {

const color= deepPurple[200];

  return (
    <React.Fragment>
   <Box sx={{ width: 650, paddingTop: 1, justifyContent: "center" }}>
        
   <Card variant='outlined'>
       <CardContent>
            <Typography variant="h6" sx={{fontSize: 25, color: deepPurple[400]}} component="div">
                {title}
            </Typography>
            <Typography sx={{fontSize: 15}} color='text.secondary' gutterBottom >
                {content}
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="space-around">
                <Typography sx={{ mb: 0, fontSize: 15 }} color="text.secondary">
                    <img 
                    alt=""
                    className="xp-up"
                    src="https://cdn-images-1.medium.com/max/800/1*kIv0TNBYlRLGg8F72lHC3A.png"/>
                    {xp} XP
                    <img 
                    alt=""
                    className="xp-down"
                    src="https://cdn-images-1.medium.com/max/800/1*qYKAkcTfQkQRm2Ce7sjWSA.png"/>    
                </Typography>
                <Button variant="outlined" color="secondary">
                    Add a new comment
                </Button>
                 <Typography sx={{ mb: 0, fontSize: 15 }} color="text.secondary">
                  {views} views
                 </Typography> 
            </Stack>
       </CardContent>
   </Card>
  
   <CommentList comments = {comments} />
   </Box>
   </React.Fragment>
  )
}

export default PostPage
