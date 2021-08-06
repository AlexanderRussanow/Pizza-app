import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import pizzaReducer from './reducers/pizzas'
import filterReducer from './reducers/filters'
import cartReducer from './reducers/cart'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
   pizzaReducer,
   filterReducer,
   cartReducer
})


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export default store