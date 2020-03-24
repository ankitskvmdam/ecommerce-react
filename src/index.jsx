import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from './common/script/history'
import theme from './common/script/theme'

import { ThemeProvider } from '@material-ui/styles'
import './common/stylesheet/main.scss'

// Component
import App from './components/app'

// store
import store from './redux/store'


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

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>, document.getElementById("ecommerce-react"))

