import { GET_ALL_CHARACTERS, GET_EPISODES } from './actions'

const initialState = {
  characters: {},
  characterById: {},
  episodes: [],
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: payload,
      }
    case GET_EPISODES:
      return {
        ...state,
        episodes: payload,
      }
    default: {
      return state
    }
  }
}

export default reducer
