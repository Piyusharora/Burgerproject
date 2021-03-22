import React, {Component} from 'react';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder.module.js';
//import './App.css';
import Layout from './components/Layout/Layout.module.js';

class App extends Component {
  render(){
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div> 
  );
  }
}
export default App;
