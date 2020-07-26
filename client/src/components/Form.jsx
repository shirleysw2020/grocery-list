import React from 'react';
import groceries from './GroceryList.jsx'

// controlled form component USE THIS
  // must have state & fields in form
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quantity: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // event is an object
  handleChange(event) {
    // event.target.value is what's typed in fields.
    this.setState({[event.target.name]: event.target.value});
    this.setState({[event.target.quantity]: event.target.value})
    // this.setState({name: event.target.value});
  }
  handleSubmit(event) {
    // this.state.name because our state was already chenged after we click on submit, we go to state to get the value.
    {alert("new grocery item is: " + this.state.name)}
    // put this.state.name (user input) into list, so need to pass to list.


  }

  render() {
    return (
      <form>
        <label> Item
            <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label> Quantity
            {/* attach value to state */}
            <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleSubmit}>Add Grocery</button>
      </form>
    );
  }
}

export default Form;