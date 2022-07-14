import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import { ImageListItem } from '@mui/material';

function PostForm({ handleAddPost}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
//   const [image, setImage] = useState("");

    // const history = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/snacks_posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: content,
            // image: image
          }),
        })
          .then((r) => r.json())
          .then((newPost) => 
          handleAddPost(newPost))
      }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
              <Link to='/' >
                  <img 
                  onClick= {handleClickOpen}
                  src="https://cdn-images-1.medium.com/max/1000/1*NpwRpbvvwz_dZRkvajFh8w.png"
                  width={`${40}px`} 
                  height={`${40}px`} 
                  alt=""
                   />
                  </Link>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a New Post!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let's share a new snack! Please input the necessary information below.
                    </DialogContentText>
                    <form onSubmit={handleSubmit} id="myform">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        name= "title"
                        label="Title"
                        type="text"
                        value= {title}
                        onChange={(e) =>setTitle(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="content"
                        name="content"
                        label="Content"
                        type="text"
                        value= {content}
                        onChange={(e) =>setContent(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="upload-photo"
                        label="Image"
                        type="file"
                        value= {image}
                        onChange={(e) =>setImage(e.target.value)}
                        fullWidth
                        variant="standard"
                    /> */}
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

        </div>

       
    )
}

export default PostForm