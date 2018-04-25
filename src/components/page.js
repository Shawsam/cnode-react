import React from 'react'
import { Pagination } from 'antd'

const Page = ({pageSize,total,onChange})=>{
	return(
          <div className="page">
              <Pagination pageSize={pageSize} total={total} onChange={onChange} />
          </div>
	)
}

export default Page