import React from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';

var groceries = [
  {name: 'Chicken Thighs', quantity: 12},
  {name: 'Garlic', quantity: 3},
  {name: 'Parmesean Cheese', quantity: 1},
  {name: 'Pesto Sauce', quantity: 1},
  {name: 'Peaches', quantity: 5},
  {name: 'Spinach', quantity: 3},
  {name: 'Onions', quantity: 5}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    }

    this.addGrocery = this.addGrocery.bind(this);
    // this.state.listeners = {
    //   name: [<List/>],
    //   location: []
    // }
  }

  // this.setState = (newState) {
  //   for(var key in newState) {
  //     this.state[key] = newState[key];
  //     this.state.listeners[key].forEach(component => {
  //       component.render();
  //     })
  //   }
  // }


  componentDidMount() {
    this.setState({groceries: groceries})
  }

  addGrocery(grocery) {
    this.setState({groceries: [...this.state.groceries, grocery]})
  }

  render() {
    return (
      <div>
        <Header />
        <Form addGrocery={this.addGrocery}/>
        <List groceries={this.state.groceries} />
      </div>
    )
  }
}

export default App;