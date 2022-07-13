import React from 'react'
import CommentCard from './CommentCard'

function CommentList({comments}) {

  console.log("comments:", comments)

  return (
    comments.map((comment) => {
      return (
        <CommentCard key={comment.id} commentContent={comment.comment} profileName={comment.user.profile_name} replies={comment.replies}/>
      )
    })
  )
}

export default CommentList