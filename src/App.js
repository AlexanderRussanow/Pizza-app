import axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { setPizzas } from './redux/actions/pizzasAC'
import { connect } from 'react-redux'



// function App() {
//   const [pizzas, setPizzas] = useState([])
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(res => setPizzas(res.data.pizzas))
//   }, [])


//   return (
//     <div>
//       <div className="wrapper">
//         <Header />

//         <div className="content">
//           <Route exact path='/' >
//             <Home pizzas={pizzas} />
//           </Route>
//           <Route exact path='/cart'>
//             <Cart />
//           </Route>
//         </div>
//       </div>
//     </div>
//   );
// }


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    console.log(this.props.items)
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path='/' >
              <Home pizzas={this.props.items} />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzaReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
