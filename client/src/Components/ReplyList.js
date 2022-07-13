import React from 'react'
import ReplyCard from './ReplyCard'

function ReplyList({replies}) {

  console.log("comments replies:", replies)


  return (
    replies.map((reply) => {
      <ReplyCard 
      key={reply.id} 
      reply={reply.reply}
      />
    })
  )
}

export default ReplyList