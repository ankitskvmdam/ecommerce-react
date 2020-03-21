import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { FaEnvelope, FaLock } from "react-icons/fa"
import { SELLER_LOGIN } from '../../../common/script/url'

class RegistratonPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form action="" className="form">
                <div className="form-heading-container">
                    <h1 className="form-heading">
                        Registration
                    </h1>
                </div>

                <div className="form-field-container">
                    <div className="field">
                        <FaEnvelope className="input-box-icon"/>
                        <input className="input-box" type="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <FaEnvelope className="input-box-icon"/>
                        <input className="input-box" type="text" placeholder="Username"/>
                    </div>
                    <div className="field">
                        <FaLock className="input-box-icon"/>
                        <input className="input-box" type="password" placeholder="Password"/>
                    </div>

                    <div className="form-link-con">
                        <div className="form-button main-background">
                            <Link to="/">
                                Create Account
                            </Link>
                        </div>
                    </div>
                    <div className="form-link-container">
                        <Link to={SELLER_LOGIN}>Already have one?</Link>                        
                    </div>

                </div>
            </form>
        )
    }
}

export default withRouter(RegistratonPage)