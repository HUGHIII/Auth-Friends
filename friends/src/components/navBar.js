import React from 'react'
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul>
                <li><Link to ='/login'>Login</Link></li>
                <li><Link to ='/FriendsList'>Friends</Link></li>
                <li><Link to ='/'>home</Link></li>

                
            </ul>
        </div>
    )
}

export default NavBar