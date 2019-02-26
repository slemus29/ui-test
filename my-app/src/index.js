import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import Home from './pages/Home';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(()=> {
  const currentPolls = store.getState().polls.polls
  console.log("change detected", currentPolls.length)
  if(currentPolls.length > 0){
    localStorage.setItem('ruleOfThumb', JSON.stringify(currentPolls));
  }
  
});

ReactDOM.render(
  <Provider store={store} >
    <Home />
  </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
