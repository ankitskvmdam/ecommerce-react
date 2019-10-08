import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaCaretLeft, FaCar } from "react-icons/fa"

class ForgotPassword extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form action="" className="form">
                <div className="form-heading-container">
                    <h1 className="form-heading">
                        Forgot Password
                    </h1>
                </div>

                <div className="form-field-container">
                    <div className="field">
                        <FaEnvelope className="input-box-icon"/>
                        <input className="input-box" type="email" placeholder="Email"/>
                    </div>

                    <div className="form-link-con">
                        <div className="form-button main-background">
                            <Link top="/">
                                Submit
                            </Link>
                        </div>
                    </div>
                    <div className="form-link-container">
                        <Link to="/login"><FaCaretLeft/> Back </Link>                        
                    </div>

                </div>
            </form>
        )
    }
}

export default withRouter(ForgotPassword)