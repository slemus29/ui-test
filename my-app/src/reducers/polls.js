import axios from 'axios';

const RECEIVE_POLLS = 'FETCH_POLLS';
const REQUEST_POLLS = 'REQUEST_POLLS';
const UPDATE_THUMB = 'UPDATE_THUMB';

export function fetchPolls() {
  return (dispatch) => {
    dispatch(requestPolls());
    const localVersion = localStorage.getItem('ruleOfThumb')
    console.log("localversion", localVersion)
    if (localVersion === null) {
      axios.get(`http://localhost:3000/json/polls.json`).then((res) => {
        dispatch(receivePolls(res.data))
      });
    }else{
      dispatch(receivePolls(JSON.parse(localVersion)))
    }

  }
}

export function updateThumb(index, thumbType) {
  return {
    type: UPDATE_THUMB,
    payload: { index, thumbType }
  }
}

export function requestPolls() {
  return {
    type: REQUEST_POLLS
  }
}

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

const initialState = {
  fetching: false,
  polls: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_POLLS:
      return {
        fetching: true,
        polls: []
      }
    case RECEIVE_POLLS:
      return {
        fetching: false,
        polls: action.polls
      }
    case UPDATE_THUMB:
      const { index, thumbType } = action.payload;
      const { polls } = state
      console.log("index and tumbthy", index, thumbType)
      console.log(state)
      let newPoll
      if (thumbType === 'up') {
        newPoll = { ...polls[index], thumbsUp: polls[index].thumbsUp + 1, lastVote: 'up' }
      } else {
        newPoll = { ...polls[index], thumbsDown: polls[index].thumbsDown + 1, lastVote: 'down' }
      }
      return {
        fetching: false,
        polls: [...polls.slice(0, index), newPoll, ...polls.slice(index + 1)]
      }
    default:
      return state;
  }
}

export function pollData(state) {
  return state.polls.polls;
}

export function isFetching(state) {
  return state.polls.fetching;
}