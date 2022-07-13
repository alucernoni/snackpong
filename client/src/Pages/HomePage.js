import React, {useState, useEffect} from 'react'
import NavBar from '../Components/NavBar'
import PostList from '../Components/PostList'
import PostForm from '../Components/PostForm';


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

  function handleAddPost(newPost) {
    const updatedPostsArray = [...posts, newPost];
    setPosts(updatedPostsArray);
  }

  // function handleUpdatePost(updatedPost) {
  //   const updatedPostsArray = posts.map((post) => {
  //     if (post.id === updatedPost.id) {
  //       return updatedPost;
  //     } else {
  //       return post;
  //     }
  //   });
  //   setPosts(updatedPostsArray);
  // }

  // const displayedPosts = posts.filter((post) => {
  //   return post.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });
    
  return (
    <div>
        <NavBar />
        
        <PostList 
        posts= {posts}/>        
    </div>
  )
}

export default HomePage