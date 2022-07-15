import React, {useState} from 'react'
import PostCard from '../Components/PostCard'
import { Card, CardContent, Typography, Stack, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import CommentList from '../Components/CommentList'
import ReplyList from '../Components/ReplyList'

function PostPage({user, id, comments, title, content, xp, views, onUpdatePost}) {

const [updatedTitle, setUpdatedTitle]= useState(title); 
const [updatedContent, setUpdatedContent]= useState(content);
const [commentsArray, setCommentsArray] = useState(comments)
const [newComment, setNewComment] = useState("")
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


function handlePostUpdate(e) {
    e.preventDefault();
    fetch(`/snacks_posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
    })
      .then((r) => r.json())
      .then((updatedPost) => {
        onUpdatePost(updatedPost);
      });
  }

  function handleAddComment(newAddComment) {
    const updatedComments = [...comments, newAddComment];
    setCommentsArray(updatedComments)
  }

  function onDeleteComment(id) {
    const updatedCommentsList = comments.filter((comment) => comment.id !== id);
    setCommentsArray(updatedCommentsList);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: newComment,
        user_id: user.id,
        snacks_post_id: id
      }),
    })
      .then((r) => r.json())
      .then((newAddComment) => 
      handleAddComment(newAddComment))
  }



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
                <form onSubmit={handlePostUpdate}>
                  <input
                    type="text"
                    placeholder= {title}
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                  />
                  <input
                  type="text"
                  placeholder= {content}
                  value={updatedContent}
                  onChange={(e) => setUpdatedContent(e.target.value)}
                />
                  <button type="submit">Update Post</button>
                </form>
                <Button variant="outlined" color="success" onClick= {handleClickOpen}>
                    Add a new comment
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add a New Comment!</DialogTitle>
                  <DialogContent>
                      <DialogContentText>
                          What do you think of this snack?
                      </DialogContentText>
                      <form onSubmit={handleSubmit} id="myform">
                      <TextField
                          autoFocus
                          margin="dense"
                          id="newComment"
                          name= "newComment"
                          label="newComment"
                          type="text"
                          value= {newComment}
                          onChange={(e) =>setNewComment(e.target.value)}
                          fullWidth
                          variant="standard"
                      />
                      </form>
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                  
                      <Button
                      type="submit"
                      form="myform"
                      // onSubmit={handleSubmit}
                      onClick={handleClose}
                      >Post!</Button>
                  </DialogActions>
                </Dialog>
                 <Typography sx={{ mb: 0, fontSize: 20 }} color="text.secondary">
                  {views} views
                 </Typography> 
            </Stack>
       </CardContent>
   </Card>
   <CommentList comments = {commentsArray} onDeleteComment={onDeleteComment}/>
   </React.Fragment>
  )
}

export default PostPage
