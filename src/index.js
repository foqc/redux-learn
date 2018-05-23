import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { loadBooks } from '../src/actions/bookActions';
import { loadColors } from '../src/actions/colorActions';
import history from "./history";

const store = configureStore();

store.dispatch(loadBooks());
store.dispatch(loadColors());

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <Route component={routes} />
        </Provider>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();