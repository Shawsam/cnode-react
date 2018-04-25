import React from 'react'
import { NavLink }from 'react-router-dom'

const Header = ()=>{
	return (
	  <header className="header">
	      <div className="content">
		      <h2 className="title"><NavLink exact to="/" >论坛</NavLink></h2>
		      <ul className="nav">
		      	<li><NavLink exact to="/" activeClassName="selected" >首页</NavLink></li>
		      	<li><NavLink to="/guide" activeClassName="selected" >新手入门</NavLink></li>
		      	<li><NavLink to="/api" activeClassName="selected" >API</NavLink></li>
		      	<li><NavLink to="/about" activeClassName="selected" >关于</NavLink></li>
		      	<li><NavLink to="/register" activeClassName="selected" >注册</NavLink></li>
		      	<li><NavLink to="/login" activeClassName="selected" >登录</NavLink></li>
		      </ul>
	      </div>
      </header>
	)
}

export default Header