
const initialState = {
   items: [],
   isLoading: false
}

const pizzaReducer = (state = initialState, action) => {
   if (action.type === 'SET_PIZZAS') {
      return {
         ...state,
         items: action.payload
      }
   }
   return state
}

export default pizzaReducer