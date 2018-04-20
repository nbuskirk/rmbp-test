import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className='navbar navbar-expand navbar-dark bg-dark fixed-top container'>
      <Link className='navbar-brand' to='/'>Home</Link>
      <div className='collapse navbar-collapse'>
	      <ul className='navbar-nav mr-auto'>
	        <li className='nav-item'><Link className='nav-link' to='/characters'>Characters</Link></li>
	      </ul>
	      <form className='form-inline'>
	      	<input className='form-control mr-sm-2' type='search' placeholder='Search' />
	      	<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
	      </form>
      </div>
    </nav>
  </header>
)

export default Header