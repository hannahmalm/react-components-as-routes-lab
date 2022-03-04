import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

// This component already contains a Router wrapper where we'll include our particular routes.
//  Inside this element, we'll need to render our Navbar and 4 React Router Route components with paths to /, /movies, /directors & /actors and rendering the respective components. 
// When a user visits the root URL, they should see the Home component.

// contains a <NavBar /> component
//     4) contains a <Route path="/">
//     5) contains a <Route path="/actors">
//     6) contains a <Route path="/directors">
//     7) contains a <Route path="/movies">


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/actors" component={Actors}/>
        <Route exact path="/directors" component={Directors}/>
        <Route exact path="/movies" component={Movies}/>
      </div>

    </Router>
  );
};

export default App
