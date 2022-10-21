import React from 'react'
import Enlaces from './Enlaces'
import CartWidget from './CartWidget'

function NavBar(){
    return(
        <nav className="Header">
            <a className='Brand'>Infinite<span>Beauty</span></a>
            <Enlaces/>
            <CartWidget/>
        </nav>
    )
}


export default NavBar