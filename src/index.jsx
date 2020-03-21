import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './common/script/history';
import './common/stylesheet/main.scss';
import Home from './components/index'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Router history={history}>
               <Route path="/" component={Home} />
           </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("ecommerce-react"));

