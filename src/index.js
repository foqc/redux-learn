import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';
import { fetchUser, fetchCurrentUser } from '../src/actions/sessionActions';

const store = configureStore();

if (sessionStorage.jwt) {
    store.dispatch(fetchUser());
} else {
    store.dispatch(fetchCurrentUser({}));
}

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();