import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import 'whatwg-fetch'
import moment  from 'moment'
import { Pagination } from 'antd'

// const MainPanel = ()=>{
// 	return(
//       <div className="panel">
//           <div className="title">
//                <ul className="cateMenu">
// 		          <li className="active">全部</li>
// 		          <li>精华</li>
// 		          <li>分享</li>
// 		          <li>问答</li>
// 			   </ul>
//           </div>
//           <div className="list">
// 		      <ul className="mainListCon">
// 		          <li><a>【已正式上线】基于 Egg 的 CNode 社区</a><span classNam="time">2018-4-20 18:00</span></li>
// 		          <li><a>【已正式上线】基于 Egg 的 CNode 社区</a><span classNam="time">2018-4-20 18:00</span></li>
// 		          <li><a>【已正式上线】基于 Egg 的 CNode 社区</a><span classNam="time">2018-4-20 18:00</span></li>
// 		      </ul>
//           </div>
//       </div>
// 	)
// }


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

class MainPanel extends Component{
	constructor(props){
	   super(props)
	   this.state = {
	   	   cate:'all',
	   	   listData:[],
	   	   currentPage:1
	   }
	   this.tabSwitch = this.tabSwitch.bind(this)
	   this.pageChange = this.pageChange.bind(this)
	}
	componentWillMount(){
	   fetch('https://cnodejs.org/api/v1/topics?tab=all')
	   .then(res=>{ 
	   	    return res.json()
	   })
	   .then(res=>{ 
	   	    this.setState({listData:res.data})
	    })
	}

    tabSwitch(tab){
       fetch('https://cnodejs.org/api/v1/topics?tab='+tab)
	   .then(res=>{ 
	   	    return res.json()
	   })
	   .then(res=>{ 
	   	    this.setState({cate:tab,
	   	    	           listData:res.data,
	   	    	           currentPage:1
	   	    })
	    })
    }
    
    pageChange(pageNumber){
       let tab = this.state.cate
       fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${pageNumber}`)
	   .then(res=>{ 
	   	    return res.json()
	   })
	   .then(res=>{ 
	   	    this.setState({ listData:res.data})
	    })
    }


	render(){
		return(
	      <div className="panel">
	          <div className="title">   
			       <ul className="cateMenu">
				       <li className={this.state.cate==='all'?'active':''} onClick={(e)=>{this.tabSwitch('all')}}>全部</li>
				       <li className={this.state.cate==='good'?'active':''} onClick={(e)=>{this.tabSwitch('good')}}>精华</li>
				       <li className={this.state.cate==='share'?'active':''} onClick={(e)=>{this.tabSwitch('share')}}>分享</li>
				       <li className={this.state.cate==='ask'?'active':''} onClick={(e)=>{this.tabSwitch('ask')}}>问答</li>
			       </ul>
	          </div>

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
}

export default MainPanel