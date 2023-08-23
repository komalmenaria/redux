const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore

const initialState = {
    name:"komal",
    address:{
        street:'123 main sdsd',
        city:'calefornia',
        state:'usa'
    },
}

const STREET_UPDATED = "STREET_UPDATED"

const updateStreet = (street) =>{
    return {
        type:STREET_UPDATED,
        payload:street,
    }
}

const updateStreetReducer = (state = initialState , action) =>{
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload,
            //     },
            // }
            return produce(
                state, (draftCopyOfState)=>{
                    draftCopyOfState.address.street = action.payload
                }
            )
            break;
    
        default:
            return state
            break;
    }
}

const store = createStore(updateStreetReducer)
console.log("Initial state" , store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("Updated state", store.getState())
})

store.dispatch(updateStreet('nallasopara tulinj'))
unsubscribe()