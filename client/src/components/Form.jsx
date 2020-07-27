import React from 'react';

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
    // this.state.name is the way to access latest value from state bc our state already changed after we click onSubmit
    // {alert("new grocery item is: " + this.state.name)}
    this.setState({
      name: event.target.value,
      quantity: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.props.handler}>
        <label> Item
            <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label> Quantity
            {/* attach value to state */}
            <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <button>Add Grocery</button>
      </form>
    );
  }
}

export default Form;