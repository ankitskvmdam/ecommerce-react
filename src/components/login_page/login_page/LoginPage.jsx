import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaCaretRight } from "react-icons/fa"

class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form action="" className="form">
                <div className="form-heading-container">
                    <h1 className="form-heading">
                        Member Login
                    </h1>
                </div>

                <div className="form-field-container">
                    <div className="field">
                        <FaEnvelope className="input-box-icon"/>
                        <input className="input-box" type="text" placeholder="Email/Username"/>
                    </div>
                    <div className="field">
                        <FaLock className="input-box-icon"/>
                        <input className="input-box" type="password" placeholder="Password"/>
                    </div>
                    <div className="form-link-container">
                        <Link to="/forgot_password">Forgot password?</Link>
                    </div>

                    <div className="form-link-con">
                        <div className="form-button main-background">
                            <Link top="/">
                                Login
                            </Link>
                        </div>
                    </div>
                    <div className="form-link-container">
                        <Link to="/register">Create Account <FaCaretRight/></Link>                        
                    </div>

                </div>
            </form>
        )
    }
}

export default withRouter(LoginPage)