import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import PostForm from '../Components/PostForm'

function CreatePostPage() {

  const [posts, setPosts] = useState([]);


  const handleAddPost = (formData) => {
		setPosts([...posts, formData])

	}
//find a way to display it on homepage 
  const displayedPosts = posts.filter((post) => {
    return post
  });


  return (
    <div>
      <NavBar />
      <PostForm
      onAddPost= {handleAddPost}
      />
    </div>
  )
}

export default CreatePostPage