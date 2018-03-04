 import React from 'react'
 import { render } from 'react-dom'
 import { BrowserRouter, Route } from 'react-router-dom'
 import { Provider } from 'react-redux';

 import { store } from './_helpers';
 import { App } from './App';

/* Style*/
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import './Assets/css/style.css';


 render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
 ), document.getElementById('root'));
