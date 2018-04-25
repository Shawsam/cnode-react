import React from 'react'
import Panel from '../components/panel'

const PageRegister = ()=>{
	return(  <div className="register">
                 <div className="sidebar">
		             <Panel title="客户端二维码" name="qrcodeCon" />
		         </div>
		         <div className="main">
		             <div className="content">
		                 <div className="title">注册</div>
		                 <div className="text"></div>
		             </div>
		         </div>
	         </div>
		  )
}

export default PageRegister