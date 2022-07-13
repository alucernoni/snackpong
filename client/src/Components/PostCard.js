import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function PostCard({post, setSelectedPost, onClickPost}) {

  const handleClick = () => {
    // setSelectedPost(post)
    onClickPost(post)
  }

    // const bull = (
    //     <Box
    //       component="span"
    //       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    //     >
    //       •
    //     </Box>
    //   );
      
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

                src="https://cdn-images-1.medium.com/max/800/1*kIv0TNBYlRLGg8F72lHC3A.png"
                alt=""/>
                {post.xp} XP
                <img 
                className="xp-down"
                src="https://cdn-images-1.medium.com/max/800/1*qYKAkcTfQkQRm2Ce7sjWSA.png"
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
            </CardActions>

            <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined"></Card>
          </Box>

          </React.Fragment>
          </div>

          
        );
      
}

export default PostCard