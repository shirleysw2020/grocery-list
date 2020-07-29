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
    this.getGroceries = this.getGroceries.bind(this);
  }
// when page first load, axios make get request to fetch all data to client on the page。 get latest data
  getGroceries(cb) {
    axios.get(ENDPOINT) // an response object
    .then(this.setGroceries)
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
    // this.getGroceries((res) => {
    //   this.setState({groceries: res.data})
    // })
  }
  // this captures the form data
  addGrocery(grocery) {
    // Capture the submitted form data & make post request to /groceries
    axios.post(ENDPOINT, grocery)
    .then((grocery) => {
      console.log('server got your post req!')
      this.setState({groceries: [...this.state.groceries, grocery]})
      })
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