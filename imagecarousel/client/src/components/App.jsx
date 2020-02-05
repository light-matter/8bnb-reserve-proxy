import React from 'react';
import axios from 'axios';
import SimilarHomes from './SimilarHomes.jsx';
import styled from 'styled-components';

const TitleHead = styled.h2`
  font-family: sans-serif;
  font-weight: bold;
  color: rgb(72,72,72);
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
    };
  }

  getHomes() {
    axios.get('http://localhost:3003/homes')
      .then((response) => {
        console.log(response.data[1].homes);
        this.setState({
          homes: response.data[2].homes,
        });
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  componentDidMount() {
    this.getHomes();
  }

  render() {
    return (
      <div>
        <TitleHead> More homes you make like </TitleHead>
        <SimilarHomes similarHomes={this.state.homes} />
      </div>
    );
  }
}


export default App;
