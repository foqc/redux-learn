import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../src/common/Header';
import UserRoute from '../../src/routes/UserRoute';
import LoginRoute from '../../src/routes/LoginRoute';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../src/components/home/HomePage';
import BooksPage from '../../src/components/books/BooksPage';
import LogInPage from '../../src/components/LogInPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch><Header /></Switch>
        <div className="container-fluid" style={{ marginTop: '30px' }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <UserRoute path="/books" component={BooksPage} />
            <LoginRoute path="/login" component={LogInPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;