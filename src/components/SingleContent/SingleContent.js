import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300, unavailable } from '../../Config/Config'
import './SingleContent.css'
import TransitionsModal from '../Modals/Modal'
const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
    return (
        <TransitionsModal  media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>6?'primary':'secondary'}/>
            <img className='poster' src={ poster? `${img_300}${poster}`:unavailable} alt={title}/>
            <b className='title'>{title}</b>
            <div className='subTitle'>
            <span>{media_type==='tv'?'TV series':'Movie'}</span>
            <span>{date}</span>
            </div> 
        </TransitionsModal>
    )
}

export default SingleContent
