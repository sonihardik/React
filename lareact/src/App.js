import React, {Component} from 'react';
import axios from 'axios';
import Loading from './Loading';
//import {Loading} from './Loading';

class App extends Component {
  constructor(props){
    super(props);
    //Creating a state
    this.state = {
      users: [],
      loading: false,
      loadingMessage: 'Loading the users'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    });
    
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
    }));
  }

  handleSubmit(e){
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }

  componentWillMount(){
    this.getUsers();
  }

  render(){
    const {loading, users, loadingMessage} = this.state
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Load Users"/>
        </form>
        <hr/>
        {!loading ? users.map(user => 
          <div key={user.id.value}>
            <h3 style={{color:'red'}}>{user.name.first}</h3>
            <p>{user.email}</p>
            <hr/>
          </div>) : (
            <Loading message= {loadingMessage}/>
          )}
      </div>
    );
  }
}

export default App;
