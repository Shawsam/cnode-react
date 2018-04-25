import React from 'react'
import moment from '../utils'
import { Icon } from 'antd'

const Comment = ({reply_count,replies,ups})=>{
   return(
      <div className="comment">
         <div className="title">{reply_count} 条回复</div>
         <ul>
         	{replies.map((item)=>{
                  		   return(
                              <li key={item.id}>
                                 <img className="avatar" alt='头像' src={item.author.avatar_url} />
                                 <p className="info">
                                     <span>{item.author.loginname}</span>
                                     <span>{item.index}</span>
                                     <span>{moment(item.create_at).fromNow()}</span>
                                     <span className="ups"><Icon type="like-o" /> {item.ups.length}</span>
                                 </p>
                                 <p className="text" dangerouslySetInnerHTML={{__html:item.content }}></p>
                              </li>
                           )
	                     })
            }
         </ul>
      </div>
   )
}

export default Comment