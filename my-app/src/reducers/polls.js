import axios from 'axios';

const ROOT_URL = '/cms';
const RECEIVE_POLLS = 'FETCH_POLLS';
const REQUEST_POLLS = 'REQUEST_POLLS';

export function fetchPolls() {
  return (dispatch) => {
    dispatch(requestPolls());
    axios.get(`http://localhost:3000/json/polls.json`).then((res) => {
      dispatch(receivePolls(res.data))
    }
    );
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