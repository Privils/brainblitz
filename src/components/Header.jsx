import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router'

const Header = () => {
  return (
  <>
  <header>
    <Link to='/' className='logo'>
    brainblitz</Link>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </nav>
  </header>
  </>
  )
}

export default Header
