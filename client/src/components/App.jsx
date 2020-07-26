import React from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import groceries from './GroceryList.jsx'

// refactor into stateful component
const App = () => (
    <div>
        <Header />
        <Form />
        {/* <button>Add Grocery</button> */}
        {/* this is like invoking List w groceries arg */}
        <List groceries={groceries}/>
    </div>
)

// refactor to stateful component ^
// componentDidMount() {
  // this.setstate({groceries, groceries})
// }
export default App;

// var groceries = [
//   {name: 'cold brew coffee', quantity: 5},
//   {name: 'eggs', quantity: 12},
//   {name: 'kale', quantity: 1},
//   {name: 'garlic', quantity: 1},
//   {name: 'peaches', quantity: 3},
//   {name: 'steak', quantity: 2},
//   {name: 'rice krispies cereo', quantity: 1},
// ];