import axios from 'axios';
import React from 'react';

import Frenchnews from 'src/containers/Frenchnews';


import './business.scss';


class Business extends React.Component {

  componentDidMount = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=ff55744710a7420ca00b5bba07fffebe')
    
    .then(response => {

      const { getFrenchNews } = this.props;
      const part1 = response.data.articles.slice(0, 4)
      const part2 = response.data.articles.slice(5, 9)
      const part3 = response.data.articles.slice(10, 14)
      const part4 = response.data.articles.slice(15, 19)
      getFrenchNews(part1, part2, part3, part4);
    })
    .catch(error => {
      console.log(error);
    })

  }

  render() {
    return(
      <div id="business">
        <Frenchnews />
      </div>
    );
  }
}

export default Business;
