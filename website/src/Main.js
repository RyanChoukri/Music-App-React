import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect }  from 'react-redux';

import { PrivateRoute } from './_components/privateRoute';
import { alertActions } from './_actions/alerts.actions'
/* Pages*/
import { Home } from './pages/Home';
import { Profil } from './pages/Profil';
import { Favorite } from './pages/Favorite';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import NoMatch from './pages/NoMatch';
import TodolistPage from './pages/TodolistPage'

import { initActions } from './_actions'

class Main extends Component {
  constructor(props) {
    super(props);
    const { dispatch, history } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  componentDidMount() {
    this.props.dispatch(initActions.fetchInitData());
  }

  render () {
    const { alert } = this.props;
    return (
        <div>
          {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Switch>
            {/* Not connected Routes */}
            <Route exact path='/' render={(props) => <Home {...props}/>}/>
            <Route path='/login' render={(props) => <Login {...props}/>}/>
            <Route path='/register' render={(props) => <Register {...props}/>}/>
            <Route path='/todolist' render={(props) => <TodolistPage {...props}/>}/>


            {/* Privates Routes authMiddleware */}
            <PrivateRoute path='/profil' {...this.props} component={Profil}/>
            <PrivateRoute path='/favorites' {...this.props} component={Favorite}/>

            <Route component={NoMatch} />
          </Switch>
        </div>
    )
  }
};

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(Main);
export { connectedApp as Main };


