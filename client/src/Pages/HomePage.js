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

  function handleAddPost(newPost) {
    const updatedPostsArray = [...posts, newPost];
    setPosts(updatedPostsArray);
  }

  function handleDeletePost(id) {
    const updatedPostsArray = posts.filter((post) => post.id !== id);
    setPosts(updatedPostsArray);
  }

  function handleUpdatePost(updatedPost) {
    const updatedPostsArray = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPostsArray);
  }

  // const displayedPosts = posts.filter((post) => {
  //   return post.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });
    
  return (
    <div>
        <PostList 
        posts= {posts}

        onDeletePost= {handleDeletePost}
        setSelectedPost={setSelectedPost}
        onClickPost={onClickPost}
        />        
    </div>
  )
}

export default HomePage