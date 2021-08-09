
const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_PIZZA_CART': {
         const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]
         const newObj = {
            ...state.items,
            [action.payload.id]: { items: currentPizzaItems, totalPrice: currentPizzaItems.reduce((sum, item) => item.price + sum, 0) }
         }

         const items = Object.values(newObj).map(obj => obj.items).flat()

         const totalCountAmount = items.reduce((sum, item) => item.price + sum, 0)

         return {
            ...state,
            items: newObj,
            totalCount: items.length,
            totalPrice: totalCountAmount

         }
      }
      case 'CLEAR_CART': {
         return {
            items: {},
            totalPrice: 0,
            totalCount: 0
         }
      }
      case 'CLEAR_CHOSEN_PIZZAS': {
         const newItem = {
            ...state.items
         }

         const currentTotalPrice = newItem[action.payload].totalPrice
         const currentTotalLength = newItem[action.payload].items.length
         delete newItem[action.payload]

         return {
            ...state,
            items: newItem,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalLength
         }
      }

      case 'ONE_MORE-PLUS': {
         const newItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0]
         ]
         const items = Object.values(newItems).map(obj => obj.items).flat()
         const actualTotalPrice = newItems.reduce((sum, item) => item.price + sum, 0)

         return {
            ...state,
            items: {
               ...state.items,
               [action.payload]: {
                  items: newItems,
                  totalPrice: actualTotalPrice,
               },

            },
            totalPrice: state.totalPrice + actualTotalPrice,
            totalCount: items.length
         }
      }


      // case 'MINUS_ONE': {
      //    const oldItems = state.items[action.payload].items;
      //    const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      //    const newItems = {
      //       ...state.items,
      //       [action.payload]: {
      //          items: newObjItems,
      //          totalPrice: newItems.reduce((sum, item) => item.price + sum, 0),
      //       },
      //    };

      //    return {
      //       ...state,
      //       items: {
      //          ...state.items,
      //          [action.payload]: {
      //             items: newItems,
      //          }
      //       }

      //    }
      // }
      default: return state
   }
}

export default cartReducer