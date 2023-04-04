import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import NewBook from './pages/NewBook';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import EditBook from './pages/EditBook';
import Register from './pages/Register';

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/new" component={NewBook} />
        <Route exact path="/books/:id" component={BookDetails} />
        <Route exact path="/books/:id/edit" component={EditBook} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default Main;
