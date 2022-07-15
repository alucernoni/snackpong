import React from 'react'
import CommentCard from './CommentCard'

function CommentList({comments, onDeleteComment}) {

  console.log("comments:", comments)

  return (
    comments.map((comment) => {
      return (
        <CommentCard key={comment.id} commentContent={comment.comment} id={comment.id} profileName={comment.user.profile_name} replies={comment.replies} onDeleteComment={onDeleteComment}/>
      )
    })
  )
}

export default CommentList