import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Go get the createStore method from the redux module
// We also nee apllyMiddleWare from redux if we're going to use middleware
import { createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';

// import the Provider so react and redux can talk
import { Provider } from 'react-redux';

// import the rootReducer so we can give it the Store..fill those shelves
import RootReducer from './reducers/rootReducer';


// const theStore = createStore(RootReducer);
// Make a store that uses middleware
// applyMiddleware takes an arg (all the Middleware to be used)
// which returns a function that takes 1 arg, createStore
const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore);
const theFinalStore = createStoreWithMiddleWare(RootReducer);

// ReactDom.render takes 2 args...1. What, 2. Where
ReactDOM.render(
	<Provider store={theFinalStore}>
		<div className="app">
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
);

