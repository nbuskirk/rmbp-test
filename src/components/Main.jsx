import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx' //homepage component

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/characters' component={()=>(<p>character list</p>)}/>
    </Switch>
  </main>
)

export default Main