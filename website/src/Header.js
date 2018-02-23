import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { userActions } from './_actions';

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }
  SetCurrentClass(path) {
    return (this.props.location.pathname === path ? "nav-current": "") + " nav-button";
  }

  GetUser(param) {
    if(this.props.user && Object.keys(this.props.user).length) {
      return this.props.user[param] || '';
    }
    return '';
  }

  handleLogout () {
    this.props.dispatch(userActions.logout(this.props.history))
  }

  render() {
    return (
      <header>
        <nav>
          <h1><Link to="/">Music <img className="logo" alt="logo" src="https://image.flaticon.com/icons/svg/148/148722.svg"/></Link></h1>
          {this.props.user && Object.keys(this.props.user).length ?
          (<ul className="nav-list">
            <li className={this.SetCurrentClass("/profil")}><Link to="/profil">{this.GetUser('username') || 'Profil'}</Link></li>
            <li className={this.SetCurrentClass("/music")}><Link to="/music">{ 'Mes Musiques ' +  (this.props.favoritesLength ? this.props.favoritesLength : '')}</Link></li>
            <li className={this.SetCurrentClass()}><span onClick={this.handleLogout} className="logout">Se deconnecter</span></li>
          </ul>) :
          (<ul className="nav-list">
            <li className={this.SetCurrentClass("/register")}><Link to="/register">S'inscrire</Link></li>
            <li className={this.SetCurrentClass("/login")}><Link to="/login">Se connecter</Link></li>
          </ul>)
          }
          <hr/>
            {this.props.player.music && this.props.player.music.status &&
              (
                <div className="player">
                  <p>{this.props.player.music.title}</p>
                  <p>Artiste : {this.props.player.music.artist}</p>
                  <p>Genre : {this.props.player.music.type}</p>
                  <audio
                  src={this.props.player.music.song} autoPlay controls="controls">
                    Votre navigateur ne supporte pas l'élément <code>audio</code>.
                  </audio>
                </div>
              )
            }
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.authentication, player : state.player, favoritesLength : state.favorites.length };
}
const HeaderPage = connect(mapStateToProps)(Header);
export { HeaderPage as Header };