import React, { Component } from 'react'
import { userActions } from '../_actions'
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            const { dispatch } = this.props;
            dispatch(userActions.login({ username, password }, this.props.history));
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="container">
                <h1>Page de Connexion</h1>
                <div className="row">
                    <form className="col-md-3" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label forhtml="exampleInputEmail1">Email</label>
                            <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre Email" value={username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label forhtml="exampleInputPassword1">Mot de Passe</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Entrer votre mot de passe" name="password" value={password} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Connexion</button>
                        {loggingIn &&
                            <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };