import React from 'react'
import Panel from '../components/panel'

const PageApi = ()=>{
	return(
		    <div className="api">
		         <div className="sidebar">
		             <Panel title="CNode：Node.js专业中文社区" name="loginCon" />
		             <Panel title="无人回复的话题" name="questionCon" isList="true" />
		             <Panel title="客户端二维码" name="qrcodeCon" />
		         </div>
		         <div className="main">
		             <div className="content">
		                 <div className="title">Api</div>
		                 <div className="text">
							 <div class="markdown-text"><p>以下 api 路径均以 <strong><a href="https://cnodejs.org/api/v1">https://cnodejs.org/api/v1</a></strong> 为前缀</p>
								<h3>主题</h3>
								<h4>get /topics 主题首页</h4>
								<p>接收 get 参数</p>
								<ul>
								<li>page <code>Number</code> 页数</li>
								<li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
								<li>limit <code>Number</code> 每一页的主题数量</li>
								<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
								</ul>
								<p>示例：<a href="/api/v1/topics">/api/v1/topics</a></p>
								<h4>get /topic/:id 主题详情</h4>
								<p>接收 get 参数</p>
								<ul>
								<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
								<li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 以及 <code>replies</code> 列表中的 <code>is_uped</code> 值。</li>
								</ul>
								<p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
								<h4>post /topics 新建主题</h4>
								<p>接收 post 参数</p>
								<ul>
								<li>accesstoken <code>String</code> 用户的 accessToken</li>
								<li>title <code>String</code> 标题</li>
								<li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code> <code>dev</code>。开发新客户端的同学，请务必将你们的测试帖发在 <code>dev</code> 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
								<li>content <code>String</code> 主体内容</li>
								</ul>
								<p>接收 post 参数</p>
								<ul>
								<li>accesstoken <code>String</code> 用户的 accessToken</li>
								<li>topic_id <code>String</code> 主题id</li>
								<li>title <code>String</code> 标题</li>
								<li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code></li>
								<li>content <code>String</code> 主体内容</li>
								</ul>
								<ol>
								<li>如何获取 accessToken？
								用户登录后，在设置页面可以看到自己的 accessToken。
								建议各移动端应用使用手机扫码的形式登录，验证使用 <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
								</ol>
							</div>
		                 </div>
		             </div>
		         </div>
		    </div>
		  )
}

export default PageApi



