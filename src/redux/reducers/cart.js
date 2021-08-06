
const initialState = {
   items: {
      id: 1
   },
   totalPrice: 0,
   totalCount: 0
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      // case 'SET_TOTAL_PRICE':
      //    return {
      //       ...state,
      //       totalPrice: action.payload
      //    }
      // case 'SET_TOTAL_COUNT':
      //    return {
      //       ...state,
      //       totalCount: action.payload
      //    }
      case 'ADD_PIZZA_CART': {
         const newObj = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload]
         }

         const nestValueItems = Object.values(newObj).flat()
         // const concatValueItems = [].concat.apply([], Object.values(newObj))

         const totalCountAmount = nestValueItems.reduce((sum, item) => item.price + sum, 0)

         return {
            ...state,
            items: newObj,
            totalCount: nestValueItems.length,
            totalPrice: totalCountAmount

         }
      }
      default: return state
   }
}

export default cartReducer