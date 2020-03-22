import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Component
import LoginPage from "./login_page"
import Home from './home'
import About from './about'
import Contact from './contact'

// URL
import { SELLER_LOGIN, HOME, ABOUT, CONTACT } from '../common/script/url'


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
                </Switch>
            </div>
        )
    }
}

export default Pages