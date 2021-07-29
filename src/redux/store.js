import { createStore, combineReducers } from "redux";
import pizzaReducer from './reducers/pizzas'
import filterReducer from './reducers/filters'

const rootReducer = combineReducers({
   pizzaReducer: pizzaReducer,
   filterReducer: filterReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store