import React from 'react';
import axios from 'axios';
import User from './components/User';
import './App.css';


class App extends React.Component {
  state = {
    users: []
  }
   

  componentDidMount() {
    axios.get("https://api.github.com/users/halliwell2046")
    .then(res => {
      console.log(res.data)
      this.setState({
        ...this.state,
        users: res.data        
      })
    })
    .catch(err => {
      console.log("Unable to fetch User",err)
    })

    axios.get("https://api.github.com/users/halliwell2046/followers")
    .then(res => {
      console.log("fetch data", res)
      this.setState({
        ...this.state, 
        users: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return(
      <div className="App">
        <h1>Github User Card Lifecycle</h1>
        <User users ={this.state.users}/>
      </div>  
    )
  }
}
export default App;
