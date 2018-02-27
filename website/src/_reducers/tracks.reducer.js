import { favoritesConstants } from '../_constants';

const initalstate = [
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
];


export function tracks(state = initalstate, action) {
  switch (action.type) {
    case favoritesConstants.TRACK_ADD:
      return [ ...state, action.music ]
  
    case favoritesConstants.TRACK_REMOVE:
      return [ ...state.filter(item => item.id !== action.music.id) ]
    default:
      return state
  }
}
