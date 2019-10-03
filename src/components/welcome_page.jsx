import React from 'react'
import { withRouter } from 'react-router-dom'

class WelcomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="main-h1">
                    Hi! Welcome to Vurtuality.
                </div>
                <div className="main-about">
                    Vurtuality is a community for developers to help each other and follow tutorials and make awesome projects together!
                </div>
            </div>
        )
    }
}

export default withRouter(WelcomePage)