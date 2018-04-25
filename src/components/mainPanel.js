import React, {Component} from 'react'
import CateMenu from './cateMenu'
import Mainlist from './mainList'
import Loading from './loading'
import 'whatwg-fetch'



class MainPanel extends Component{
	constructor(props){
	   super(props)
	   this.state = {
	   	   isLoading:true,
	   	   tab:'all',
	   	   listData:[]
	   }
	   this.pageChange = this.pageChange.bind(this)
	}

    //默认参数
    fetchData(tab='all',pageNumber=1){
       this.setState({isLoading:true})
	   fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${pageNumber}`)
	   .then(res=>{ 
	   	    return res.json()
	   })
	   .then(res=>{ 
	   	    this.setState({listData:res.data,isLoading:false})
	    })
    }
    
    //路由参数
	componentWillMount(){
	   let tab = new URLSearchParams(this.props.location.search).get('tab')
	   if(!tab) tab = 'all'
	   this.setState({tab:tab})
	   this.fetchData(tab);
	}
    
    //路由变化触发数据更新
	componentWillReceiveProps(nextProps) {
      if (nextProps.location.search !== this.props.location.search) {
      	 let tab = new URLSearchParams(nextProps.location.search).get('tab')
      	 this.setState({tab:tab})
         this.fetchData(tab)
      } 
    }

    pageChange(pageNumber){
       let tab = this.state.tab
       this.fetchData(tab,pageNumber)
    }

	render(){
		const isLoading = this.state.isLoading
	    return(
		  <div className="panel">
			  <CateMenu tab={this.state.tab} />
			  {isLoading?<Loading />
			  	        :<Mainlist pageSize={40} total={400} onChange={this.pageChange} data={this.state.listData} />
			  }
          </div>
	    )
	} 
}

export default MainPanel