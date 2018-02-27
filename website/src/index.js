import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import { store} from './_helpers'
import { Header } from './Header';
import { Main }  from './Main';

/* Style*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/style.css';


render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Route component={Main}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
