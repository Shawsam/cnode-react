import React, {Component} from 'react'
import Panel from '../components/panel'
import Article from '../components/article'
import Comment from '../components/comment'
import Loading from '../components/loading'

class PageTopic extends Component{
   constructor(props){
   	 super(props)
   	 this.state = {
   	 	data:{},
   	 	isLoading:true
   	 }
   }
   componentWillMount(){
   	 const  id = this.props.match.params.id
   	 this.fetchData(id)
   }
   //默认参数
   fetchData(id){
	   fetch(`https://cnodejs.org/api/v1/topic/${id}`)
	   .then(res=>{ 
	   	    return res.json()
	   })
	   .then(res=>{ 
	   	    this.setState({data:res.data,
	   	                   isLoading:false})
	   })
   }

   render(){
   	    const isLoading = this.state.isLoading
		return(
	      <div className="topic">
	         <div className="sidebar">
	             {isLoading?<Loading />:
	             	        <Panel title="作者" name="authorCon" author= {this.state.data.author} />
	             }
	             <Panel title="相关的话题" name="questionCon" isList="true" />
	             <Panel title="无人回复的话题" name="questionCon" isList="true" />
	         </div>
	         <div className="main">
		        {isLoading?<Loading />
		     	          :<div>
		     	              <Article {...this.state.data} />
		     	              <Comment {...this.state.data} />
		     	           </div>
		     	}
	         </div>
	      </div>      
		)
    }
}

export default PageTopic