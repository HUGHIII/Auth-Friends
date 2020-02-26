import React from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import NavBar from './components/navBar';
import Login from './components/login';
import FriendsList from './components/FriendsList';



import './App.scss';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
       <PrivateRoute exact path='/FriendsList' component={FriendsList}/>
       <Route path ='/login' component={Login}/>
     </Switch>
    </div>
  );
}

export default App;
