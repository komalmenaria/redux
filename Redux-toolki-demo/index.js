const store = require('./app/store')
const cakeActions = require('./features/Cake/cakeSlices').cakeActions
const icecreamActions = require('./features/IceCream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/User/userSlice').fetchUsers

console.log('Initial state' , store.getState())
// const unsubscribe= store.subscribe(()=>{
//     console.log('Updated state', store.getState())
// })

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))


store.dispatch(fetchUsers())


// unsubscribe()


