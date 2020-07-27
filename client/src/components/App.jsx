import React from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import IntialGroceries from './GroceryList.jsx'

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
          {/* <Form handler={this.handler.bind(this)}/> */}
          <Form handler={this.handler}/>
          {/* this is like invoking List w groceries arg */}
          <List groceries={this.state.groceries}/>
          {/* <List /> */}
      </div>
    )
  }
}

// refactor to stateful component ^
// componentDidMount() {
  // this.setstate({groceries, groceries})
// }
export default App;
