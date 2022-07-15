import React, {useState, useEffect} from 'react'
import PostList from '../Components/PostList'



function HomePage({ onClickPost, handleAddPost, posts, onDeletePost, onUpdatePost, onAddView, user}) {

    
  return (
    <div>
        <PostList 
        posts= {posts}
        user={user}
        handleAddPost= {handleAddPost}
        onDeletePost= {onDeletePost}
        onClickPost={onClickPost}
        onUpdatePost={onUpdatePost}
        onAddView={onAddView}
        />        
    </div>
  )
}

export default HomePage