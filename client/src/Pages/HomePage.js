import React, {useState, useEffect} from 'react'
import PostList from '../Components/PostList'



function HomePage({ onClickPost, handleAddPost, posts, onDeletePost, user}) {

    
  return (
    <div>
       <img 
        className= "homepage-image"
        src= "https://cdn-images-1.medium.com/max/800/1*Ect67gIMsPmCG72cCFGXlA.png"/>  
        <PostList 
        posts= {posts}
        user={user}
        handleAddPost= {handleAddPost}
        onDeletePost= {onDeletePost}
        onClickPost={onClickPost}

        />        


    </div>
  )
}

export default HomePage