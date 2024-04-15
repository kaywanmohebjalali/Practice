
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: 0,
    isLoading: false,
    isError: null
}


const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit(state, action) {
            state.balance = state.balance + action.payload
        },

        withdraw(state, action) {
            state.balance = state.balance - action.payload
        },


        requestLoan:{

        prepare(amount, purpose){
            return{
                payload:{amount, purpose}
            }

        },
        
        reducer(state, action) {
            if (state.loan > 0) return
            state.loan = action.payload.amount
            state.loanPurpose = action.payload.purpose
            state.balance = state.balance + action.payload.amount
        }
        },

        payload(state) {
            state.balance = state.balance - state.loan
            state.loan = 0
            state.loanPurpose = ''

        },

        convertingCurrency(state, action) {
            state.isLoading = action.payload

        },

        error(state, action) {
            state.isError = action.payload

        },



    }
})

export const {withdraw, requestLoan, 
    payload, 
    convertingCurrency,
     error} = accountSlice.actions

export default accountSlice.reducer

export function deposit(amount, currency) {
    if (currency == "USD")  return {
       type: 'account/deposit',
       payload: amount
   }
   
   return  async function (dispatch){
       try {
           dispatch({type:'account/convertingCurrency',payload:true})
          const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
          const data = await response.json()
    
           dispatch({
               type: 'account/deposit',
               payload: data.rates.USD
           })
       } catch (error) {
         dispatch({type:'account/error',payload:error.message})
       }finally{
           dispatch({type:'account/convertingCurrency',payload:false})

       }
  }

}




