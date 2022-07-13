import { Card, CardContent, CardActions, Typography, Button, Stack} from '@mui/material'
import React from 'react'
import ReplyList from './ReplyList'

function CommentCard({commentContent, profileName, replies}) {

  console.log("replies:", replies)
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
          <Button variant="outlined" color="secondary">
            Delete Comment
          </Button>
        {/* </Stack> */}
      </CardActions>
      </Card>
      {/* <ReplyList replies = {replies}/> */}
    </React.Fragment>
  )
}

export default CommentCard