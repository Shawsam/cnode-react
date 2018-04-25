import React from 'react'
import ListItem  from './listItem'
import Page from './page'

const Mainlist = ({data,pageSize,total,onChange})=>{
	return( <div>
			    <div className="list">
				      <ul className="mainListCon">
					      {data.map((item)=>{
					          	 return(<ListItem top={item.top} good={item.good} author={item.author} key={item.id} topicid={item.id} tab={item.tab} title={item.title} create_at={item.create_at}  />)
					          })
					      }
				      </ul>
		        </div>
		        <Page pageSize={pageSize} total={total} onChange={onChange} />
		    </div>
	       )
}

export default Mainlist