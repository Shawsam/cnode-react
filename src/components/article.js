import React, { Component } from 'react'
import moment from '../utils'

const Article = ({isLoading,tab,top,good,title,create_at,author,visit_count,content})=>{
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
      <div className="article">
          <div className="title">
             <p className="name"><label className="tab">{tabName}</label>{title}</p>
             <p className="info">
               <span>· 发布于 {moment(create_at).fromNow()}</span>
               <span>· 作者 {author?author.loginname:''}</span>
               <span>· {visit_count} 次浏览</span>
             </p>
          </div>
          <div className="text" dangerouslySetInnerHTML={{__html:content }} ></div>
      </div>
   )
}

export default Article