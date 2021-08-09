import axios from 'axios';

export const setLoading = (payload) => ({
   type: 'SET_LOADING',
   payload
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
   
   dispatch(setLoading(false))
   axios.get(`/pizzas?${category === null ? '' : `category=${category}`}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
      dispatch(setPizzas(data))
   })
}

export const setPizzas = (item) => ({
   type: 'SET_PIZZAS',
   payload: item
})

