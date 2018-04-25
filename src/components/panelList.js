import React from 'react'
import {Link} from 'react-router-dom'
import qrcode from '../image/qrcode.png'

const questionData=[{title:'CNode：智能合约开发用solidity编写代币合约的代',id:1},
                   {title:'CNode：智能合约开发用solidity编写代币合约的代',id:12},
                   {title:'CNode：智能合约开发用solidity编写代币合约的代',id:13},
                   {title:'CNode：智能合约开发用solidity编写代币合约的代',id:14},
                   {title:'CNode：智能合约开发用solidity编写代币合约的代',id:15}]
const gradeData=[{name:'alsotang',value:20189,id:1},
                {name:'tang',value:18050,id:11},
                {name:'solada',value:10145,id:111},
                {name:'zhang',value:9020,id:1191},
                {name:'zier',value:8017,id:1121},
                {name:'sliver',value:8017,id:1311},
                {name:'markin',value:8017,id:11411},
                {name:'nancky',value:8017,id:1511}]

const LoginCon = ()=>{
	return(
		<div className="loginCon">
		    <p>欢迎光临论坛，您可以 
		       <Link to="/login">登录</Link>  
		        或   
		       <Link to="/register">注册</Link>
		    </p>
		</div>
	)
}

const QuestionCon = ()=>{
	return(
		<div className="questionCon">
		    {questionData.map((item)=>{
		    	return <li key={item.id}>{item.title}</li>
		    })}
		</div>
	)
}

const GradeCon = ()=>{
	return(
		<div className="gradeCon">
		    {gradeData.map((item)=>{
		    	return <li key={item.id}><span>{item.value}</span><span>{item.name}</span></li>
		    })}
		</div>
	)
}

const QrcodeCon = ()=>{
	return(
		<div className="qrcodeCon">
		    <img alt="二维码" src={qrcode} />
		    <p>二维码</p>
		</div>
	)
}


const AuthorCon = ({author})=>{
	return(
		<div className="authorCon">
            <img alt='头像' src={author.avatar_url} />{author.loginname}
            <p>积分 155</p>
            <p><i>“我很懒，什么也没留下”</i></p>
		</div>
	)
}


const PanelList = ({name,isList,author})=>{
	let listDom
	switch(true){
		case name === 'loginCon': listDom = <LoginCon />; break;
		case name === 'questionCon': listDom = <QuestionCon />; break;
		case name === 'gradeCon': listDom = <GradeCon />; break;
		case name === 'qrcodeCon': listDom = <QrcodeCon />; break;
		case name === 'authorCon': listDom = <AuthorCon author={author} />; break;
		default:listDom = <LoginCon />
	}
	return(
	  <div className="list">{listDom}</div>
	)
}

export default PanelList