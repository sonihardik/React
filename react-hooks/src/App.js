import React, {Component, useState, useEffect} from 'react';

const App = () => {
  const[news, setNews] = useState([]);

  const fetchNews = () => {
    fetch("https://www.generatedata.com/#t3")
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews()
  });

  return (
    <div>
      <h2>News</h2>
      {news.map((n, i) => (<p key={i}>{n.title}</p>))}
    </div>
  );
};

/* const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} Times`;
  });

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={increase}>Clicked {count} Times</button>
    </div>
  );
}; */

/* class App extends Component {
  state = {
    count: 0
  };

  increase = () => {
    this.setState({
      count: this.state.count+1
    });
  };

  componentDidMount(){
    document.title = `Clicked ${this.state.count} Times`;
  };

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} Times`;
  };

  render(){
    return  (
      <div>
        <h2>Counter App</h2>
        <button onClick={this.increase}>Clicked {this.state.count} Times</button>
      </div>
    ); 
  }
} */

export default App;
