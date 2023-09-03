// const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
// const cakeReducer = require('../features/Cake/cakeSlices')
// const icecreamReducer = require('../features/IceCream/icecreamSlice')
// const userReducer = require('../features/User/userSlice')


import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/Cake/cakeSlices";
import userReducer from "../features/User/userSlice";
import icecreamReducer from "../features/IceCream/icecreamSlice";


// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer,
    },
    // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

// module.exports  = store
export default store