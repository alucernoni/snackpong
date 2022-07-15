import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple } from '@mui/material/colors';



function PostCard({onDeletePost, post, onClickPost, onUpdatePost}) {
const {id, title, content, xp, views} = post;

const [updatedTitle, setUpdatedTitle]= useState(title); 
const [updatedContent, setUpdatedContent]= useState(content);

const [isUp, setIsUp] = useState("")
const [isDown, setIsDown]= useState("")
const color= deepPurple[200];

const emptyDownArrow= "https://cdn-images-1.medium.com/max/800/1*qYKAkcTfQkQRm2Ce7sjWSA.png"
const redDownArrow= "https://cdn-images-1.medium.com/max/800/1*oNM0yOEyn77IsTdUDmXcVg.png"
const emptyUpArrow= "https://cdn-images-1.medium.com/max/800/1*kIv0TNBYlRLGg8F72lHC3A.png"
const greenUpArrow= "https://cdn-images-1.medium.com/max/800/1*DdtVeHfbdwjwmLWwkmG8UA.png"

const handleUp = () => {
  // updateUp(id, isUp)
  setIsUp(!isUp)
}
const handleDown = () => {
  // updateDown(id, isDown)
  setIsDown(!isDown)
}

function handleDeleteClick() {
  fetch(`/snacks_posts/${id}`, {
    method: "DELETE",
  });
  onDeletePost(id);  
}

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

  const handleClick = () => {
    // setSelectedPost(post)
    onClickPost(post)
  }
        return (
            <div className="post-cards">
            <React.Fragment>
            <CardContent>
              <Link to= "/post" style={{textDecoration: 'none'}}>
                  <Typography variant="h6" component="div" onClick={handleClick}>
                  {post.title}
                </Typography>
              </Link>
              <Link to= "/post" style={{textDecoration: 'none'}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom onClick={handleClick}>
                {post.content}
                </Typography>     
              </Link>
              <Typography sx={{ mb: 0 }} color="text.secondary">
                <img 
                className="xp-up"
                onClick={handleUp}
                src= {isUp ? greenUpArrow : emptyUpArrow}

                alt=""/>
                {post.xp} XP
                <img 
                className="xp-down"
                onClick={handleDown}
                src= {isDown ? redDownArrow : emptyDownArrow}
                alt=""
                />
                
              </Typography>
  
              <Typography sx={{ mb: 0 }} color="text.secondary">
                {post.views} views
              </Typography>
  
            </CardContent>
  
            <CardActions>
              <Button size="small">Comments 
              <img 
              className="comment-icon"
              src="https://cdn-images-1.medium.com/max/800/1*nH3vaPiqc5ZEiH6u-aJszg.png"
              alt=""/>
              </Button>
              <DeleteIcon
              className="postcard-trash-button"
              onClick= {handleDeleteClick}
              sx={{ color: deepPurple[200] }}/>

                <form onSubmit={handlePostUpdate}>
                  <input
                    className="postcard-title-change"
                    type="text"
                    placeholder= "Let's Change the Title"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                  />
                  <input
                  className="postcard-content-change"
                  type="text"
                  placeholder= "Oops, I made a mistake. Let's fix that"
                  value={updatedContent}
                  onChange={(e) => setUpdatedContent(e.target.value)}
                />
                  <button
                  className="postcard-update-button"
                  type="submit">Update Post</button>
                </form>


            </CardActions>

            <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined"></Card>
          </Box>

          </React.Fragment>
          </div>

          
        );
      
}

export default PostCard