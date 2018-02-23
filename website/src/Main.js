import React, { Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoute } from './_components/privateRoute';
import { alertActions } from './_actions/alerts.actions'
/* Pages*/
import { Home } from './pages/Home';
import { Profil } from './pages/Profil';
import { Music } from './pages/Music';
import { Login } from './pages/Login';
import NoMatch from './pages/NoMatch';

import { connect }  from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.props.history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render () {
    const { alert } = this.props;
    return (
        <div>
          {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props}/>}/>
            <Route path='/login' render={(props) => <Login {...props}/>}/>

            <PrivateRoute path='/profil' {...this.props} component={Profil}/>
            <PrivateRoute path='/music' {...this.props} component={Music}/>
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


