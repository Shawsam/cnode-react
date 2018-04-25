import React from 'react'
import { Route } from 'react-router-dom'
import PageHome from '../containers/pageHome'
import PageGuide from '../containers/pageGuide'
import PageApi from '../containers/pageApi'
import PageAbout from '../containers/pageAbout'
import PageLogin from '../containers/pageLogin'
import PageRegister from '../containers/pageRegister'
import PageTopic from '../containers/pageTopic'

const PageRouter = ()=>{
	return(
		<div className="framepage content">
	      <Route exact path="/" component={PageHome}/>
	      <Route exact path="/guide" component={PageGuide}/>
	      <Route exact path="/api" component={PageApi}/>
	      <Route exact path="/about" component={PageAbout}/>
	      <Route exact path="/login" component={PageLogin}/>
	      <Route exact path="/register" component={PageRegister}/>
	      <Route exact path="/topic/:id" component={PageTopic}/>
		</div>
	)
}
export default PageRouter


