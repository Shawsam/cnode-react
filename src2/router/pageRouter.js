import React from 'react'
import { Route } from 'react-router-dom'
import pageHome from '../containers/pageHome'
import pageGuide from '../containers/pageGuide'
import pageApi from '../containers/pageApi'
import pageAbout from '../containers/pageAbout'
import pageLogin from '../containers/pageLogin'
import pageRegister from '../containers/pageRegister'

const PageRouter = ()=>{
	return(
		<div className="framepage content">
	      <Route exact path="/" component={pageHome}/>
	      <Route exact path="/guide" component={pageGuide}/>
	      <Route exact path="/api" component={pageApi}/>
	      <Route exact path="/about" component={pageAbout}/>
	      <Route exact path="/login" component={pageLogin}/>
	      <Route exact path="/register" component={pageRegister}/>
		</div>
	)
}
export default PageRouter


