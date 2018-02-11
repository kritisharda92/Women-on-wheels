import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import RouteReact from './redux/containers/Route'
import FinanceReducer  from './redux/reducers/FinanceReducer'

let store = createStore(
    FinanceReducer,
    undefined,
    compose()
  );

ReactDOM.render( 
  <Provider store={store}><RouteReact /></Provider>,
  document.getElementById('root')
);
