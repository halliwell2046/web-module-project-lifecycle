import React from 'react';
import axios from 'axios';
import User from './components/User';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCard: {}
    }
  }


componentDidMount() {
  axios.get("https://api.github.com/users")
  .then((res) => {
    this.setState({...this.state, userCard: res.data})
    console.log(res.data)
  }) 
  .catch(err => console.log(err))
}

componentDidUpdate(prevProps, prevStates) {
  console.log("component updated and running")
}


// fetchUsers = () => {
//   axios.get("https://api.github.com/users")
//   .then(res => {
//     this.setState({...this.state, users: res.data})
//   }) 
//   .catch(err => console.log(err))
// }

// handleChanges = event => {
//   this.setState({
//     ...this.state,
//     users: event.target.value
//   })
// }


render() {
  return (
    <div className="App">
    <h1>Github User Card Lifecycle</h1>
    <User userCard={this.state.userCard} />
    </div>
  )
}
}


  

export default App;
