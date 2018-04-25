import React, { Component } from 'react'
import PageRouter from './router/pageRouter'
import Header from './components/header'
import 'antd/dist/antd.css'
import './style/common.css'

class App extends Component {
  render() {
    return (
	   <div>
	       <Header />
	       <PageRouter />
	   </div>
    );
  }
}


export default App
