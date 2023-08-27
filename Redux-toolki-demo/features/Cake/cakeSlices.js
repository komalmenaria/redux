const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes:10
}


const cakeSlice = createSlice({
    // createslice automaticially generate actions with the same name  as the reducers function that defined below
    name:'cake',
    // initialState:initialState   this we cake write like this also only initialState when key and value same
    initialState,
    reducers:{
        // 
        ordered:(state,action) =>{
            // redux-toolkit not need immer it held state update on behalf of that and make state mutable
            state.numberOfCakes--
        },
        restocked:(state,action) =>{
            state.numberOfCakes += action.payload
        }
    },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions