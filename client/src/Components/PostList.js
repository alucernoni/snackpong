import {useState, React} from 'react'
import PostPage from '../Pages/PostPage'
import PostCard from './PostCard'


function PostList({posts, onDeletePost, setSelectedPost, onClickPost, onUpdatePost, onAddView, user}) {



     
  return (
    
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}

                // postList={post}
                onDeletePost={onDeletePost}
                post={post}
                user={user}
                setSelectedPost={setSelectedPost}
                onClickPost={onClickPost}
                onUpdatePost={onUpdatePost}
                onAddView={onAddView}
              />
            );
          })
  )
}

export default PostList

