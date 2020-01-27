import React from 'react';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import StatefulComponent from './components/StatefulComponent';
import CounterComponent from './components/CounterComponent';
import ImgComponent from './components/ImgComponent';

const App = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <FunctionalComponent />
        <ClassComponent />
        <StatefulComponent />
        <ImgComponent />
      </div>

      <CounterComponent />

      {/* Exercise 1 code goes here */}
    </div>
  );
};



export default App;
