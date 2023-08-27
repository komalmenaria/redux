const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/Cake/cakeSlices')
const icecreamReducer = require('../features/IceCream/icecreamSlice')
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
    },
})

module.exports  = store