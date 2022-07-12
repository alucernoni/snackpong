import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';


function PostCard({postList}) {


    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
        return (
            <div className="post-cards">
            <React.Fragment>
            <CardContent>

              <Typography variant="h6" component="div">
                {postList.title}
              </Typography>
  
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {postList.content}
              </Typography>
  
              <Typography sx={{ mb: 0 }} color="text.secondary">
                <img 
                className="xp-up"
                src="https://cdn-images-1.medium.com/max/800/1*kIv0TNBYlRLGg8F72lHC3A.png"/>
                {postList.xp} XP
                <img 
                className="xp-down"
                src="https://cdn-images-1.medium.com/max/800/1*qYKAkcTfQkQRm2Ce7sjWSA.png"/>
                
              </Typography>
  
              <Typography sx={{ mb: 0 }} color="text.secondary">
                {postList.views} views
              </Typography>
  
            </CardContent>
  
            <CardActions>
              <Button size="small">Comments 
              <img 
              className="comment-icon"
              src="https://cdn-images-1.medium.com/max/800/1*nH3vaPiqc5ZEiH6u-aJszg.png"/>
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