import React from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import IntialGroceries from './GroceryList.jsx'
import axios from 'axios';
const ENDPOINT = './groceries';

// request = {
//   axios: (callback) => {
//     axios.get(ENDPOINT),
//     context: this,
//     success: callback(data),
//     error: console.log(err);
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
       groceries: IntialGroceries
     }
     this.handler = this.handler.bind(this)
  }

  handler(event) {
    event.preventDefault();

    var newGrocery = this.state.groceries.concat({
      name: event.target.name.value,
      quantity: event.target.quantity.value
    });
    this.setState({
      groceries: newGrocery
    })
  }

  render() {
    return (
      <div>
          <Header />
          <Form handler={this.handler}/>
          {/* think invoking List w groceries arg */}
          <List groceries={this.state.groceries}/>
      </div>
    )
  }
}

// refactor to stateful component ^
// componentDidMount() {
  // this.setstate({groceries, groceries})
// }
export default App;
