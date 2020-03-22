import React from 'react'
import { withRouter } from 'react-router-dom'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className=''>
                This is home page
            </div>
        )
    }
}

export default withRouter(Index)