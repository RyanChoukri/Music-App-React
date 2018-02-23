import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Song from '../_components/Song/Song'

class Home extends React.Component {

  getMusic() {
    return this.props.musicList.map((music, key) => {
      return (
        <ul className="col-lg-6">
          <Song { ...this.props} music={music} />
        </ul>
      )
    });
  }

  render() {
    console.log(this.props.user );
    
    return (
      <div>
        <h1>Bienvenue sur Music</h1>
        {this.props.user && Object.keys(this.props.user).length ?
          (
            <div>
              <p>Selection musicale</p>
              <ul>
                { this.getMusic() }
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login">Connectez-vous</Link>
              <div>Ou</div>
              <Link to="/login">Inscrivez-vous</Link>
            </div>
          )
        }
      </div>
    )
  }
}

Home.defaultProps = {
  musicList : [
    {
      id : '19789087087',
      title : 'Bohemian Rhapsody',
      artist : 'Queen',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
    {
      id : '197329087087',
      title : "Don't Stop Me Now",
      artist : 'Queen',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
    {
      id : '19789187087',
      title : 'Radio Ga Ga',
      artist : 'Queen',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
    {
      id : '39789087087',
      title : 'We Will Rock You',
      artist : 'Queen',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },


    {
      id : '49789087087',
      title : "Satisfaction",
      artist : 'The Rolling Stones',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
    {
      id : '597329087087',
      title : "Sympathy For The Devil",
      artist : 'The Rolling Stones',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
    {
      id : '99789187087',
      title : 'Paint It, Black',
      artist : 'The Rolling Stones',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
    {
      id : '29789087087',
      title : 'Start Me Up',
      artist : 'The Rolling Stones',
      song : 'https://freemusicarchive.org/music/download/0aad271ce050c4f6b7e056866eca56ee7fa2cfc3',
      cover : 'https://images.eil.com/large_image/THE_CLASH_COMBAT%2BROCK%2B%2B%2BPOSTER-87064.jpg',
      type : 'Rock'
    },
  ]
};


function mapStateToProps(state) {
  const { favorites, authentication } = state;
  return {
    user : authentication.user,
    favorites
  };
}
const HomePage = connect(mapStateToProps)(Home);
export { HomePage as Home };