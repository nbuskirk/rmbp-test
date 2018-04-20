import React from 'react'
import Main from './Main.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import '../css/App.css'

const App = () => (
  <div id="page-top" className='bg-dark'>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App