import React from 'react'
import PanelList from './panelList'

const Panel = ({title,name})=>{
	return(
      <div className="panel">
          <div className="title">{title}</div>
          <PanelList name={name} />
      </div>
	)
}

export default Panel