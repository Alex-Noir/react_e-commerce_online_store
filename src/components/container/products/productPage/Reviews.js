import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import './reviews.css'

import Review from './Review'

export default function Reviews({...props}) {
  const { data } = props.value

  const [ text, setText ] = useState('')
  const [ isEditorReadOnly, setIsEditorReadOnly ] = useState(false)
  const [ array, setArray ] = useState([])

  const item = data[props.dataItem.id]
  const reviews = item.reviews

  function handleChange(value) {
    setText(value)
  }

  function deleteReview() {
    setText('')
    reviews.length = 0
    setArray([])
  }

  function postReview(reviews) { 
    if (text === '') {
      return null
    }

    setIsEditorReadOnly(true)

    const myEditor = document.querySelector('#editor > :nth-child(2)')
    const html = myEditor.children[0].innerHTML

    const review = {
      content: html
    }
    reviews.push(review)
    let reviewList = reviews.map(review => { return <Review key={review}
                                                            review={review}
                                                            modules={modules}
                                                            formats={formats}
                                                            handleChange={handleChange}
                                                            deleteReview={deleteReview}/> })
    setArray(reviewList)

    setText('')
    setIsEditorReadOnly(false)
  }

  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', { 'script': 'sub' }, { 'script': 'super' }],
      [ { 'list': 'ordered' }, 
        { 'list': 'bullet' }, 
        { 'direction': 'rtl' }, 
        { 'align': [] }, 
        { 'indent': '-1' }, 
        { 'indent': '+1' } ],
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ]
  }

  const formats = [
    'font', 'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'script',
    'list', 'direction', 'align', 'indent',
    'link', 'image', 'video',
    'color', 'background'
  ]

  return (
    <div className="bg-light d-flex flex-column">
      {
        array.length < 1
        ? (
          <React.Fragment>
            <ReactQuill id="editor"
                        value={text}
                        onChange={handleChange}
                        readOnly={isEditorReadOnly}
                        placeholder="You can write and post a reviews here, but refreshing or leaving the page will nullify them."
                        modules={modules}
                        formats={formats}
                        theme="snow" />
            <div>
              <button className="btn btn-primary ml-4 mb-4"
                      onClick={() => postReview(reviews)}>Post Review</button>
            </div>
          </React.Fragment>
        )
        : <div id="arrayWrapper" className="d-flex flex-column">
            {array}
          </div>
      }
    </div>
  )
}
