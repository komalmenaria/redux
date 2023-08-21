const redux =  require('redux')
const bindActionCreators = redux.bindActionCreators
const createStore  = redux.createStore



const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        // quantity: 1,
        payload: 1,
    };
};

const restokeCakes = (qty = 1) =>{
    return{
        type : CAKE_RESTOCKED,
        payload:qty,
        // quantity:qty,
    }
}

// (previousState,action) => newState;

const initalstate = {
    numOfCakes : 10,
    // otherproperty:0,
}

const reducer = (state = initalstate , action)=>{
switch (action.type) {
    case CAKE_ORDERED:
        return {
            ...state, // copy of the state object because the state can have more properties
            numOfCakes : state.numOfCakes - action.payload,
        }
    break;
    case CAKE_RESTOCKED:
        return{
            ...state,
            numOfCakes: state.numOfCakes + action.payload,
        }

    default:
        return state
        break;
}
}


const store =  createStore(reducer)
console.log('Initial state',store.getState())
// store.subscribe(()=>console.log("Updated state" , store.getState()))    subscribe method
const unsubscribe = store.subscribe(()=>console.log("Updated state" , store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokeCakes(3))

const action = bindActionCreators({orderCake,restokeCakes},store.dispatch)
action.orderCake();
action.orderCake();
action.orderCake();
action.restokeCakes(3);

unsubscribe()

// after unsubscribe if we dispatch action to the store then it will not log bacause we unsubscribe the changes to the store
// store.dispatch(orderCake())
// console.log('unsubscribe state',store.getState())


