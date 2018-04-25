import React from 'react'
import PanelList from './panelList'

const Panel = ({title,name,isList,author})=>{
	return(
      <div className="panel">
          <div className="title">{title}</div>
          <PanelList name={name} isList={isList} author={author} />
      </div>
	)
}

export default Panel