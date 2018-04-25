import React from 'react'
import { Link } from 'react-router-dom'
import moment from '../utils'

const ListItem = ({top,good,author,tab,title,create_at,topicid})=>{
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
        <li>
	        <img alt={author.author} className="avatar" src={author.avatar_url} />
	        <label className={tabName==='顶置'||tabName==='精华'?'good':''}>{tabName}</label>
	        <Link to={`/topic/${topicid}`}>{title}</Link>
	        <span className="time">{moment(create_at).fromNow()}</span>
        </li>
	)
}

export default ListItem