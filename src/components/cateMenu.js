import React from 'react'
import {Link} from 'react-router-dom'

const CateMenu = ({tab})=>{
	return(<div className="title">   
			   <ul className="cateMenu">
			       <li className={tab==='all'?'active':''} ><Link to="/?tab=all">全部</Link></li>
			       <li className={tab==='good'?'active':''} ><Link to="/?tab=good">精华</Link></li>
			       <li className={tab==='share'?'active':''} ><Link to="/?tab=share">分享</Link></li>
			       <li className={tab==='ask'?'active':''} ><Link to="/?tab=ask">问答</Link></li>
		       </ul>
		    </div>)
}

export default CateMenu