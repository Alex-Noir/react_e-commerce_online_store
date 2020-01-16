import React, { useState, useRef } from 'react'
import { DivReview } from '../../../styles'
import ReactQuill from 'react-quill'
import { useTranslation } from 'react-i18next'

export default function Review({...props}) {
  const [ t, i18n ] = useTranslation()

  const [ isLikePressed, setIsLikePressed ] = useState(false)
  const [ isDislikePressed, setIsDislikePressed ] = useState(false)
  const [ isReviewReadOnly, setIsReviewReadOnly ] = useState(true)
  const acceptButtonRef = useRef(null)

  const date = new Date().toISOString().slice(0, 10)

  function toggleLike() {
    if (!isLikePressed) {
      setIsLikePressed(true)
      setIsDislikePressed(false)
    } else {
      setIsLikePressed(false)
    }
  }

  function toggleDislike() {
    if (!isDislikePressed) {
      setIsDislikePressed(true)
      setIsLikePressed(false)
    } else {
      setIsDislikePressed(false)
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
                onClick={props.deleteReview}>
          <span aria-hidden="true">&times;</span>
        </button>
      </span>
      <ReactQuill defaultValue={props.review.content}
                  onChange={props.handleChange}
                  modules={props.modules}
                  formats={props.formats}
                  readOnly={isReviewReadOnly}
                  theme="bubble" />
      <div className="d-flex flex-row">
        {
          isReviewReadOnly
          ? (
            <React.Fragment>
              <button type="button"
                      className={isLikePressed ? 'btn btn-success ml-4' : 'btn btn-outline-success ml-4'}
                      onClick={toggleLike}>
                {t('Review|1')} <i className="fas fa-thumbs-up"></i>
              </button>
              <button type="button"
                      className={isDislikePressed ? 'btn btn-danger ml-2' : 'btn btn-outline-danger ml-2'}
                      onClick={toggleDislike}>
                {t('Review|2')} <i className="fas fa-thumbs-down"></i>
              </button>
            </React.Fragment>
          )
          : <button ref={acceptButtonRef}
                    className="btn btn-primary ml-4"
                    onClick={() => { setIsReviewReadOnly(true) }}>{t('Review|3')}</button>
        }
      </div>
    </DivReview>
  )
}
