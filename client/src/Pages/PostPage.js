import React from 'react'
import PostCard from '../Components/PostCard'
import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import CommentList from '../Components/CommentList'
import ReplyList from '../Components/ReplyList'

function PostPage({user, comments, title, content, xp, views}) {


  return (
    <React.Fragment>
   <Card variant='outlined'>
       <CardContent>
            <Typography variant="h6" sx={{fontSize: 50}} component="div">
                {title}
            </Typography>
            <Typography sx={{fontSize: 30}} color='text.secondary' gutterBottom >
                {content}
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="space-around">
                <Typography sx={{ mb: 0, fontSize: 20 }} color="text.secondary">
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
                <Button variant="outlined" color="success">
                    Add a new comment
                </Button>
                 <Typography sx={{ mb: 0, fontSize: 20 }} color="text.secondary">
                  {views} views
                 </Typography> 
            </Stack>
       </CardContent>
   </Card>
   <CommentList comments = {comments} />
   </React.Fragment>
  )
}

export default PostPage
