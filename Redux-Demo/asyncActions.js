const redux = require('redux')
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

// states
const initialState = {
    loading: false,
    userdata: [],
    error: ''
}

// action type
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// action creators
const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFail = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                userdata: action.payload,
                loading: false,
                error: ''

            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                userdata: [],
                loading: false,
                error: action.payload,

            }


        default:
            break;
    }
}


// action creators
const fetchUsers =  () => {
    return async function  (dispatch) {
        dispatch(fetchUsersRequested())
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
          // error api  const response = await axios.get('https://jsonplaceholder.typicode.com/usersc')
            // console.log(response.data)
        dispatch(fetchUsersSuccess(response.data))

            
        } catch (error) {
            console.log(error.message)
        dispatch(fetchUsersFail(error.message))

        }
        
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchUsers())
