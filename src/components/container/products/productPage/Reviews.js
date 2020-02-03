import React, { useState, useEffect, useRef } from 'react'
import ReactQuill from 'react-quill'
import { useTranslation } from 'react-i18next'
import './reviews.css'

import Review from './Review'

export default function Reviews({...props}) {
  const { data } = props.value

  const [ t, i18n ] = useTranslation()
  const reactQuillRef = useRef(null)
  useEffect(() => {
    reactQuillRef.current.editor.root.dataset.placeholder = t('Reviews|1')
  }, [t])


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

  function postReview() { 
    if (text === '' || 
        text.match(/^(<p><br><\/p>)+$/) !== null || 
        text.match(/^<p>\s+<\/p>$/) !== null) {
      return null
    } else {
      setIsEditorReadOnly(true)

      const myEditor = document.querySelector('#editor > :nth-child(2)')
      const html = myEditor.children[0].innerHTML.replace(/^(<p><br><\/p>)+/, '').replace(/(<p><br><\/p>)+$/, '')
      const review = {
        content: html
      }
      reviews.push(review)
      let reviewList = reviews.map(review => { return <Review key={review}
                                                              review={review}
                                                              modules={modules}
                                                              formats={formats}
                                                              handleChange={handleChange}
                                                              deleteReview={deleteReview} /> })
      setArray(reviewList)
  
      setIsEditorReadOnly(false)
    }
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
        ? <>
            <ReactQuill id="editor"
                        ref={reactQuillRef}
                        value={text}
                        onChange={handleChange}
                        readOnly={isEditorReadOnly}
                        placeholder={t('Reviews|1')}
                        modules={modules}
                        formats={formats}
                        theme="snow" />
            <div>
              <button className="btn btn-primary ml-4 mb-4"
                      onClick={postReview}>{t('Reviews|2')}</button>
            </div>
          </>
        : <div id="arrayWrapper" className="d-flex flex-column">
            {array}
          </div>
      }
    </div>
  )
}
