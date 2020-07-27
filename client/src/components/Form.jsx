import React from 'react'; // Import React library classes and methods

// Define the constructor for the Form component
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGrocery(this.state);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    // this.state[event.target.name] = event.target.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name
          <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label> Quantity
          <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}



// Makes the form constructor available through import statements in other files
export default Form;

