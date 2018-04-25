import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import 'whatwg-fetch'
import moment  from 'moment'
import { Pagination } from 'antd'

const ListItem = ({top,good,author,tab,title,create_at})=>{
	let tabName
	switch(true){
		case tab==='good': tabName="精华"; break;
		case tab==='share': tabName="分享"; break;
		case tab==='ask': tabName="问答"; break;
		case tab==='job': tabName="招聘"; break;
		default: tabName="全部";
	}
	if(top) tabName="顶置"
	if(good) tabName="精华"
	return(
        <li><img alt={author.author} className="avatar" src={author.avatar_url} /><label className={tabName==='顶置'||tabName==='精华'?'good':''}>{tabName}</label><a>{title}</a><span className="time">{moment(create_at).fromNow()}</span></li>
	)
}

class MainList extends Component(){
	
} 


	console.log(new URLSearchParams(location.search).get('tab'))
	return(
		  <div>
	          <div className="list">
			      <ul className="mainListCon">
				      {this.state.listData.map((item)=>{
				          	 return(<ListItem top={item.top} good={item.good} author={item.author} key={item.id} tab={item.tab} title={item.title} create_at={item.create_at}  />)
				          })
				      }
			      </ul>
	          </div>
	          <div className="page">
	              <Pagination current={this.state.currentPage} pageSize={40} total={400} onChange={this.pageChange} />
	          </div>
          </div>
	)
}

export default MainList