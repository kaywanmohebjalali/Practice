

import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../accounts/accountRedux'
import customerReducer from '../customers/customerRedux'


const store = configureStore({
    reducer:{
        account:accountReducer,
        customer:customerReducer
    }
})


export default store