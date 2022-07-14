import React, {useState, useEffect} from 'react'
import PostList from '../Components/PostList'



function HomePage({ onClickPost, handleAddPost, posts, onDeletePost, onUpdatePost}) {

    
  return (
    <div>
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