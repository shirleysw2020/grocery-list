import React from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import axios from 'axios';
const ENDPOINT = '/groceries';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    }
    this.addGrocery = this.addGrocery.bind(this);
    this.setGroceries = this.setGroceries.bind(this);
  }
// when page first load, axios make get request to fetch all data to client on the page。 get latest data
  getGroceries(cb) {
    axios.get(ENDPOINT) // an response object
    .then(cb)
    .catch((err) => {
      console.log(err)
    })
  }

  // groceries is resp we get from making axios get-req
  setGroceries(groceries) {
    this.setState({groceries: groceries.data})
  }

  componentDidMount() {
    this.getGroceries(this.setGroceries);
  }
  // this captures the form data
  addGrocery(grocery) {
    //Capture the submitted form data
    // this.setState({groceries: [...this.state.groceries, grocery]})
    // make post request to /groceries
    axios.post(ENDPOINT)
    .then(() => {
      this.setState({groceries: [...this.state.groceries, grocery]})
      })
    // () => {
    //   this.getGroceries(this.setGroceries);
    // })
    .catch()
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