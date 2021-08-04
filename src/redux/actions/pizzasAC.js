import axios from 'axios';

export const setLoading = (payload) => ({
   type: 'SET_LOADING',
   payload
})

export const fetchPizzas = () => (dispatch) => {
   dispatch(setLoading(false))
   axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
   })
}

export const setPizzas = (item) => ({
   type: 'SET_PIZZAS',
   payload: item
})

