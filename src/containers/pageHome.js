import React from 'react'
import MainPanel from '../components/mainPanel'
import { Route } from 'react-router-dom'
import Panel from '../components/panel'

const PageHome = ()=>{
	return(
      <div className="home">
         <div className="sidebar">
             <Panel title="CNode：Node.js专业中文社区" name="loginCon" />
             <Panel title="无人回复的话题" name="questionCon" isList="true" />
             <Panel title="积分榜" name="gradeCon" isList="true" />
             <Panel title="客户端二维码" name="qrcodeCon" />
         </div>
         <div className="main">
             <Route path='/' component={MainPanel} />
         </div>
      </div>
	)
}

export default PageHome