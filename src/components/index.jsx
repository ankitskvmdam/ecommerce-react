import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from "./login_page/login_page"
import RegistrationPage from "./login_page/registration_page"
import ForgotPassword from "./login_page/forgot_password"
import { SELLER_LOGIN, SELLER_FORGOT_PASSWORD, SELLER_REGISTRATION } from '../common/script/url'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-background">
                <div className="form-container">
                    <Switch>
                        <Route path={SELLER_LOGIN} component={LoginPage} exact={true} />
                        <Route path={SELLER_REGISTRATION} component={RegistrationPage} exact={true}/>
                        <Route path={SELLER_FORGOT_PASSWORD} component={ForgotPassword} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Home