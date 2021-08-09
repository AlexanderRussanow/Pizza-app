

// export const setTotalPrice = (value) => ({
//    type: 'SET_TOTAL_PRICE',
//    payload: value
// })


// export const setTotalCount = (value) => ({
//    type: 'SET_TOTAL_COUNT',
//    payload: value
// })

export const addPizzaToCart = items => ({
   type: 'ADD_PIZZA_CART',
   payload: items
})

export const clearCart = () => ({
   type: 'CLEAR_CART',
})

export const clearChosenPizza = (id) => ({
   type: 'CLEAR_CHOSEN_PIZZAS',
   payload: id
})

export const addOneMore = (id) => ({
   type: 'ONE_MORE-PLUS',
   payload: id
})

export const minusOne = (id) => ({
   type: 'MINUS_ONE',
   payload: id
})