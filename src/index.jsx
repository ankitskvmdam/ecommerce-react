import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redistribution, Redirect } from 'react-router-dom';
import history from './common/script/history';
import theme from './common/script/theme'

import { ThemeProvider } from '@material-ui/styles';
import './common/stylesheet/main.scss';

// Component
import App from './components/app'




class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <App />
                </Router>
            </ThemeProvider>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("ecommerce-react"));

