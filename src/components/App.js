import React from 'react';
import Header from '../../src/common/Header';
import UserRoute from '../../src/routes/UserRoute';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../src/components/home/HomePage';
import BooksPage from '../../src/components/books/BooksPage';
import LogInPage from '../../src/components/LogInPage';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <UserRoute path="/books" component={BooksPage} />
          <Route path="/login" component={LogInPage} />
        </Switch>
      </div>
    );
  }
}
export default App;