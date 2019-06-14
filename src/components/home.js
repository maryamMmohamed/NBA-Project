import React, { Component } from 'react';
import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';
import Poll from './poll';

// import URL_HOME from "../../data.json";

const URL_HOME = 'http://localhost:3004/home';

class Home extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     home: URL_HOME.home
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     home: URL_HOME.home
  //   });
  // }

  constructor(props){
    super(props);

    this.state= {
      home: ''
    }

  }

  componentDidMount(){
    fetch(URL_HOME , {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        home: json
      })
    })
  }

  render() {
    return (
      <div>
        <Featured slides={this.state.home.slider} />
        <Subscriptions />
        <Blocks blocks={this.state.home.blocks} />
        <Poll />
      </div>
    )
  }

}

export default Home;
