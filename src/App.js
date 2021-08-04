import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </div>
      </div>
    </div>
  )
}

export default App

// const mapStateToProps = (state) => {

//   return {
//     items: state.pizzaReducer.items,
//     filters: state.filterReducer
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
