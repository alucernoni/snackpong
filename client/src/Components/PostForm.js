import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function PostForm({handleAddPost}) {

    const initialPostData = {
        id: "", 
        title: "", 
        content: "", 
        xp: "", 
        views: "", 
        comments: [],
        replies: [],
    }

    const [formData, setFormData] = useState(initialPostData)

	const history = useNavigate()

    const handleChange = (e) => {
		const { id, value } = e.target
		setFormData({ ...formData, [id]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newPost = {
			id: "",
			title: formData.title,
			content: formData.content,
			xp: 0,
			views: 0
		}
		fetch('http://localhost:3000/snacks_posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newPost)
		})
			.then(resp => resp.json())
			.then(data => {
				handleAddPost(data)
				history.push(`/`)
			})
	}

    const focusEffect = useRef()
	useEffect(() => { focusEffect.current.focus() }, [])

  return (
    <form
    onSubmit= {handleSubmit}>
        <div>
            <input 
            id="title"
            onChange= {handleChange}
            placeholder="Title:"
            ref={focusEffect}
            type="text"
            value={formData.title}
            />
            <br></br>
            <input 
            id="content"   
            onChange={handleChange}
            placeholder="What's this about!"
            type= "text" 
            value={formData.content}         
            />
              <div>
                  <input className='submit' type="submit" value="Post" />
              </div>

        </div>




    </form>
  )
}

export default PostForm