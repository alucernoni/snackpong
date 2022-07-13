import React, {useState, useEffect} from 'react'
import PostList from '../Components/PostList'


function HomePage({setSelectedPost, onClickPost}) {


    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("/snacks_posts/")
          .then((resp) => resp.json())
          .then((postsArray) => {
            console.log(postsArray)
            setPosts(postsArray)
          });
      }, []);


    
  return (
    <div>
        <PostList 
        posts= {posts}
        setSelectedPost={setSelectedPost}
        onClickPost={onClickPost}
        />

    </div>
  )
}

export default HomePage