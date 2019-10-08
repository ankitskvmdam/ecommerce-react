import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './common/script/history';
import './common/stylesheet/main.scss';
import LoginPage from "./components/login_page"

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Router history={history}>
               <Route path="/" component={LoginPage} />
           </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("vurtuality-app"));

