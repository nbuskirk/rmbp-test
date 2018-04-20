import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

const Home = () => (
  	<section id='home'>
  		<div className='container'>
  			<h1 className='text-light'>Homepage</h1>
  			<p className='text-muted'>This is the homepage. blah blah</p>
  			<ul className='list-inline'>
  				<li className='list-inline-item'><Link className='text-light' to='/'>Test Link</Link></li>
  				<li className='list-inline-item'><Link className='text-light' to='/characters'>Test Link</Link></li>
  			</ul>
  		</div>
  	</section>
)

export default Home