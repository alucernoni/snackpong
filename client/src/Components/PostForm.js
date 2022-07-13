import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';

function PostForm({ onAddPost}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);

    // const initialPostData = {
    //     id: "",
    //     title: "",
    //     content: "",
    //     xp: "",
    //     views: "",
    //     comments: [],
    //     replies: [],
    // }

    // const [formData, setFormData] = useState(initialPostData)

    const history = useNavigate()

    // const handleChange = (e) => {
    //     const { id, value } = e.target
    //     setFormData({ ...formData, [id]: value })
    // }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/snacks_posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: content,
            image: image,
          }),
        })
          .then((r) => r.json())
          .then((newPost) => onAddPost(newPost));
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

            {/* <Button variant="outlined" onClick={handleClickOpen}>
                New Snack!
            </Button> */}
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
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="content"
                        label="Content"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="upload-photo"
                        label="Image"
                        type="file"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                
                    <Button onClick={handleSubmit}>Post!</Button>
                </DialogActions>
            </Dialog>

        </div>

       
    )
}

export default PostForm