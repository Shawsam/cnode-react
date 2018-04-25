import React from 'react'
import { Spin } from 'antd'

const Loading = ()=>{
	return(
		  <div className="loading">
              <Spin size="large" />
              <p>加载中...</p>
		  </div>
		)
}

export default Loading