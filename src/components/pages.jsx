import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Component
import LoginPage from "./login_page"
import Home from './home'
import About from './about'
import Contact from './contact'
import Registration from './login_page/registration'
import Admin from './dashboard/admin'
import Seller from './dashboard/seller'

// URL
import { SELLER_LOGIN, HOME, ABOUT, CONTACT, SELLER_REGISTRATION, ADMIN, SELLER } from '../common/script/url'


class Pages extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Switch>
                    <Redirect from="/" to={HOME} exact={true} />
                    <Route path={SELLER_LOGIN} component={LoginPage} />
                    <Route path={CONTACT} component={Contact} />
                    <Route path={HOME} component={Home} />
                    <Route path={ABOUT} component={About} />
                    <Route path={SELLER_REGISTRATION} component={Registration} />
                    <Route path={ADMIN} component={Admin} exact={true}/>
                    <Route path={SELLER} component={Seller} exact={true}/>
                </Switch>
            </div>
        )
    }
}

export default Pages