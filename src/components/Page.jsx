import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import Drawer from 'material-ui/Drawer'

class Page extends Component {
  
  constructor(props){
  	super(props)
  	this.state = {open:false};
  }
  
  handleClick = () => this.setState({open:!this.state.open})

  render(){
  	var divStyle = {
    	background: 'url(../img/resized/tekken7-wallpaper.jpg) no-repeat center center fixed',
    	width: '100%',
    	height: '100%',
    	position: 'absolute',
    	filter: 'saturate(25%)'
    	
    }
    return (
    	<div>
    	<AppBar title={this.props.title} onLeftIconButtonClick={this.handleClick} style={{ backgroundColor: 'transparent', position:'fixed' }}/>
    	<Paper>	
    		
    		<div style={divStyle}>
    		</div>
    		<Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
    		   <ul className='list-group'>
    		   <li><a href="/">home</a></li>
    		   <li><a href="/characters">characters</a></li>
    		   </ul>
    		</Drawer>
    	</Paper>
    	</div>
    )
  }
}

export default Page