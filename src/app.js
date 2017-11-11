"use strict"

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// import combined reducers
import reducers from './reducers/index';

// IMPORT actions
import { addToCart } from './actions/cartActions';   
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';


// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';


const Routes = (
    <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={BooksList} />
                    <Route path="/admin" component={BooksForm} />
                    <Route path="/cart" component={Cart} />
                </Route>
            </Router>
    </Provider>
)

render(
    Routes, document.getElementById('app')
)

