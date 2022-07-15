import { Card, CardContent, CardActions, Box, Typography, Button, Stack} from '@mui/material'
import React from 'react'
import ReplyList from './ReplyList'

function CommentCard({commentContent, profileName, id, onDeleteComment, replies}) {

  function handleDeleteClick() {
    fetch(`/comments/${id}`, {
      method: "DELETE",
    });
    onDeleteComment(id);  
  }

  return (
    <React.Fragment>
      <Card variant="outlined">
        <CardContent>
          <Typography>
            {profileName} says:
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {commentContent}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Stack direction="row" justifyContent="flex-end" spacing="80" > */}
            <Button variant="outlined" color="secondary" onClick= {handleDeleteClick}>
              Delete Comment
            </Button>
          {/* </Stack> */}
        </CardActions>
      </Card>
      {/* <Box variant="outlined"> */}
        {/* <ReplyList replies = {replies}/>
         reply box?
      </Box> */}
    </React.Fragment>
  )
}

export default CommentCard