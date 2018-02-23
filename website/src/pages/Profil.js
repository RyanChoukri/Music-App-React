import React, { Component } from 'react'
import { connect } from 'react-redux';

class Profil extends React.Component {

  render() {
    const user = this.props.user;
    return (
      <div>
        <h1>Mon profil</h1>
        <div className="row">
            <div className="col-md-3">
            {
              Object.keys(user).map((key, value) => (
                <p key={key}>{key + " : " + user[key]}</p>
            ))}
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return {
    user
  };
}

const ProfilPage = connect(mapStateToProps)(Profil);
export { ProfilPage as Profil };