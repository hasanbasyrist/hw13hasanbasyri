import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Homepage from './Homepage';
import NewBook from './NewBook';
import EditBook from './EditBook';
import BooksDetails from './BooksDetails';
import Register from './Register';

import './app.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/new-book" component={NewBook} />
          <Route exact path="/edit-book/:id" component={EditBook} />
          <Route exact path="/book/:id" component={BooksDetails} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
