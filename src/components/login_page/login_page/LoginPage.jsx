import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaCaretRight } from "react-icons/fa"
import { SELLER_LOGIN, SELLER_FORGOT_PASSWORD, SELLER_REGISTRATION } from '../../../common/script/url'

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
                        <Link to={SELLER_FORGOT_PASSWORD}>Forgot password?</Link>
                        <Link to={SELLER_REGISTRATION}>Create Account <FaCaretRight/></Link>                        
                    </div>

                    <div className="form-link-con">
                        <div className="form-button main-background">
                            <Link to={SELLER_LOGIN}>
                                Login
                            </Link>
                        </div>
                    </div>
                    <div className="form-link-container">
                        
                    </div>

                </div>
            </form>
        )
    }
}

export default withRouter(LoginPage)