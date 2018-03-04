import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

/* Pages*/
import { Header } from './Header';
import { Main } from './Main';

class App extends Component {

    render () {
        return (
            <div>
                <Route component={Header}/>
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
        )
    }
};

const AppPage = connect()(App);
export { App };