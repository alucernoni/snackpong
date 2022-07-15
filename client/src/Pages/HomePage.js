import React, {useState, useEffect} from 'react'
import PostList from '../Components/PostList'



function HomePage({ onClickPost, handleAddPost, posts, onDeletePost, onUpdatePost}) {

    
  return (
    <div>
       <img 
        className= "homepage-image"
        src= "https://cdn-images-1.medium.com/max/800/1*Ect67gIMsPmCG72cCFGXlA.png"/>  
        <PostList 
        posts= {posts}
        handleAddPost= {handleAddPost}
        onDeletePost= {onDeletePost}
        onClickPost={onClickPost}
        onUpdatePost={onUpdatePost}
        />    
       
    </div>
  )
}

export default HomePage