import React from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from "./login_page"
import RegistrationPage from "./registration_page"
import ForgotPassword from "./forgot_password"


class Container extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-background">
                <div className="form-container">
                    <Switch>
                        <Redirect from="/" to="/login" exact={true} />
                        <Route path={"/login"} component={LoginPage} exact={true} />
                        <Route path={"/register"} component={RegistrationPage} exact={true}/>
                        <Route path={"/forgot_password"} component={ForgotPassword} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(Container)