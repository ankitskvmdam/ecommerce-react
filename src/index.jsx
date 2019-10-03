import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './common/script/history';
import './common/stylesheet/main.scss';
import WelcomePage  from "./components/welcome_page";

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Router history={history}>
               <Route path="/" component={WelcomePage} />
           </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("vurtuality-app"));

