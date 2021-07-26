import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div  className='header-top'>
            <span onClick={()=>window.scroll(0,0)} className='header'>search_movies</span>
        </div>
    )
}

export default Header
