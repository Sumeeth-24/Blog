import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import Auth from './containers';


import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

const App = () => {

  const user =  useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])


  return (
    <Router>
       <Navbar />
         <Switch>
         <Route path="/" exact component={() => <Redirect to="/posts" />} />
              <Route exact path="/posts">
                <Home />
              </Route>
              <Route exact path="/posts/search">
                <Home />
              </Route>
              <Route path="/posts/:id">
                 <Single setCurrentId={setCurrentId} /> 
              </Route>
              <Route  path="/list">
              {!user.result ? <Listing currentId={currentId} setCurrentId={setCurrentId} /> : <Auth />}
              </Route>
              <Route  path="/write">
              {!user.result ? <Write currentId={currentId} setCurrentId={setCurrentId} /> : <Auth />}
              </Route>
              <Route  path="/settings">
              {!user.result ? <Setting /> : <Auth />}
              </Route>
         
              <Route  path="/auth"  exact component={() => (!user.result ? <Auth /> : <Home />)} />
        </Switch>
    </Router>
  )
}

export default App

