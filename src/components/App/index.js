import React from 'react';
import { Route } from 'react-router-dom';

import General from 'src/containers/General';
import Technologies from 'src/containers/Technologies';
import Sciences from 'src/containers/Sciences';
import Sante from 'src/containers/Sante';
import Business from 'src/containers/Business';
import Sport from 'src/containers/Sport';
import Header from 'src/components/Header';


import './app.scss';

const App = () => (
  <div id="app">
    <Header />
    <Route path="/" exact component={General} />
    <Route path="/technologies" exact component={Technologies} />
    <Route path="/sciences" exact component={Sciences} />
    <Route path="/sante" exact component={Sante} />
    <Route path="/business" exact component={Business} />
    <Route path="/sport" exact component={Sport} />
  </div>
);

export default App;
