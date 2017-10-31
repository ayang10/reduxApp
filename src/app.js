"use strict"
import { createStore } from 'redux';

// import combined reducers
import reducers from './reducers/index';

// IMPORT actions
import { addToCart } from './actions/cartActions';   
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// Step 1 create the store
const store = createStore(reducers);

store.subscribe(function() {
    console.log('current state is: ', store.getState());
})

// step 2 create and distach action
store.dispatch(postBooks(
    [
        {
            id: 1,
            title: 'this is the book title',
            description: 'this is the book description',
            price: 33.33
        },
        {
            id: 2,
            title: 'this is the second book title',
            description: 'this is the second book description',
            price: 50
        }
    ]
))

// DELETE a book
store.dispatch(deleteBooks(
    {id: 1}
))

//UPDATE a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'Learn React in 24h'
    }
))



// -->> Cart actions
// Add to cart
store.dispatch(addToCart([{id: 1}]))