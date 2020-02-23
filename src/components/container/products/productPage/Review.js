import React, { useState, useRef } from 'react'
import { DivReview } from '../../../Styles'
import ReactQuill from 'react-quill'
import { useTranslation } from 'react-i18next'

export default function Review({ review, modules, formats, deleteReview }) {
  const [ t ] = useTranslation()

  const [ text, setText ] = useState(review.content)
  const [ isLikePressed, setIsLikePressed ] = useState(false)
  const [ isDislikePressed, setIsDislikePressed ] = useState(false)
  const [ isReviewReadOnly, setIsReviewReadOnly ] = useState(true)
  const acceptButtonRef = useRef(null)

  const date = new Date().toISOString().slice(0, 10)

  function handleChange(defaultValue) {
    setText(defaultValue)
  }

  function toggleLikeDislike(e) {
    if (e.currentTarget.id === 'like') {
      if (!isLikePressed) {
        setIsLikePressed(true)
        setIsDislikePressed(false)
      } else {
        setIsLikePressed(false)
      }
    } else if (e.currentTarget.id === 'dislike') {
      if (!isDislikePressed) {
        setIsDislikePressed(true)
        setIsLikePressed(false)
      } else {
        setIsDislikePressed(false)
      }
    }
  }

  function acceptChanges(defaultValue) {
    if (text.match(/^(<p><br><\/p>)+$/) !== null || text.match(/^<p>\s+<\/p>$/) !== null) {
      return null
    } else { 
      setText(defaultValue)
      setIsReviewReadOnly(true) 
    }    
  }

  return (
    <DivReview>
      <img src={require('../../../../img/defaultAvatar.webp')} alt="avatar" height="50" width="50" />
      <span className="pl-4">
        UserName {date}
        <i className="fas fa-edit ml-2" onClick={() => { setIsReviewReadOnly(false) }}></i>
        <button type="button" 
                className="close text-danger"
                aria-label="Close"
                onClick={deleteReview}>
          <span aria-hidden="true">&times;</span>
        </button>
      </span>
      <ReactQuill defaultValue={text}
                  onChange={handleChange}
                  modules={modules}
                  formats={formats}
                  readOnly={isReviewReadOnly}
                  theme="bubble" />
      <div className="d-flex">
        {
          isReviewReadOnly
          ? <>
              <button id="like"
                      type="button"
                      className={isLikePressed ? 'btn btn-success ml-4' : 'btn btn-outline-success ml-4'}
                      onClick={toggleLikeDislike}>
                {t('Review|1')} <i className="fas fa-thumbs-up"></i>
              </button>
              <button id="dislike"
                      type="button"
                      className={isDislikePressed ? 'btn btn-danger ml-2' : 'btn btn-outline-danger ml-2'}
                      onClick={toggleLikeDislike}>
                {t('Review|2')} <i className="fas fa-thumbs-down"></i>
              </button>
            </>
          : <button ref={acceptButtonRef}
                    className="btn btn-primary ml-4"
                    onClick={acceptChanges}>{t('Review|3')}</button>
        }
      </div>
    </DivReview>
  )
}
