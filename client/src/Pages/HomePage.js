import React, {useState, useEffect} from 'react'
import NavBar from '../Components/NavBar'
import PostList from '../Components/PostList'


function HomePage() {

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
        <NavBar />
        <PostList 
        posts= {posts}/>        
    </div>
  )
}

export default HomePage