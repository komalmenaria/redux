const { cakeActions } = require('../Cake/cakeSlices')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIcecream: 20
}


const icecreamSlice = createSlice({
    // createslice automaticially generate actions with the same name  as the reducers function that defined below
    name: 'icecream',
    // initialState:initialState   this we cake write like this also only initialState when key and value same
    initialState,
    reducers: {
        // 
        ordered: (state, action) => {
            // redux-toolkit not need immer it held state update on behalf of that and make state mutable
            state.numberOfIcecream--
        },
        restocked: (state, action) => {
            state.numberOfIcecream += action.payload
        }
    },
    // this is old way 
    // extraReducers:{
    //     ['cake/ordered']: (state) =>{
    //         state.numberOfIcecream--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numberOfIcecream--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions