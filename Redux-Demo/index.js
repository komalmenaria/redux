const redux = require('redux')
const bindActionCreators = redux.bindActionCreators
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()



const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICESREAM_ORDERED = 'ICESREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        // quantity: 1,
        payload: 1,
    };
};
const orderIcecream = () => {
    return {
        type: ICESREAM_ORDERED,
        payload: 1,
    };
}
const restokeCakes = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
        // quantity:qty,
    }
}
const restokeIcecream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
        // quantity:qty,
    }
}

// (previousState,action) => newState;

// const initalstate = {
// numOfCakes: 10,
// numOfIcecream: 10
// // otherproperty:0,
// }


const initalCakeState = {
    numOfCakes: 10
}

const initalIcecreamState = {
    numOfIcecream: 10
}

const cakeReducer = (state = initalCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state, // copy of the state object because the state can have more properties
                numOfCakes: state.numOfCakes - action.payload,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }

        default:
            return state
            break;
    }
}


const iceCreamReducer = (state = initalIcecreamState, action) => {
    switch (action.type) {

        case ICESREAM_ORDERED:
            return {
                ...state, // copy of the state object because the state can have more properties
                numOfIcecream: state.numOfIcecream - action.payload,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload,
            }
        case CAKE_ORDERED:
            return {
                ...state, // copy of the state object because the state can have more properties
                numOfIcecream: state.numOfIcecream - 1,
            }
        default:
            return state
            break;
    }
}

// const store = createStore(reducer)
//for multiple reducer combine follow below code
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// const store = createStore(reducer)

const store = createStore(rootReducer, applyMiddleware(logger))

// const state = store.getState()
// console.log(state.cake.numOfCakes)

console.log('Initial state', store.getState())
// store.subscribe(()=>console.log("Updated state" , store.getState())) subscribe method
// const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokeCakes(3))

const action = bindActionCreators({ orderCake, restokeCakes, orderIcecream, restokeIcecream }, store.dispatch)
action.orderCake();
action.orderCake();
// action.orderCake();
// action.restokeCakes(3);
// action.orderIcecream();
// action.orderIcecream();
// action.restokeIcecream(3);


// unsubscribe()

// after unsubscribe if we dispatch action to the store then it will not log bacause we unsubscribe the changes to the store
// store.dispatch(orderCake())
// console.log('unsubscribe state',store.getState())
