import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import Home from './pages/Home';
import reducers from './reducers';


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
// serviceWorker.unregister();
