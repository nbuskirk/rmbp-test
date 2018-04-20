import React, { Component } from 'react';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//import $ from 'jquery';
//window.jQuery = window.$ = $;
//require('bootstrap');

class App extends Component {
  constructor(props){
    super()
    this.state = { data: [] }
  }
  componentDidMount() {
    fetch("http://mishinima.com:8080/character?json=true")
    .then( (response) => {
      return response.json() })   
    .then( (json) => {
      this.setState({data: json})
    })
  }
  render() {
    return (
        <div id="app">
        <Header />
        <section className="content-section text-center" id="characters"><div className="container"><div className="row"><div className="col-lg-8 mx-auto"><h2 className="text-danger">Characters</h2><p>Start browsing character specific information, guides, strategy and frame data</p><a className="btn btn-danger form-control p-3 rounded" href="/character">Characters</a></div></div></div></section>
         <Footer />
         </div>
    );
  }
}

export default App;
