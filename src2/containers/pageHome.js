import React from 'react'
import MainPanel from '../components/mainPanel'
import Panel from '../components/panel'

const pageHome = ()=>{
	return(
      <div className="home">
         <div className="sidebar">
             <Panel title="CNode：Node.js专业中文社区" name="loginCon" />
             <Panel title="无人回复的话题" name="questionCon" />
             <Panel title="积分榜" name="gradeCon" />
             <Panel title="客户端二维码" name="qrcodeCon" />
         </div>
         <div className="main">
             <MainPanel />
         </div>
      </div>
	)
}

export default pageHome