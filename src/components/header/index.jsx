import React from 'react'
import { withRouter } from 'react-router-dom'

import { AppBar, Toolbar } from '@material-ui/core'
import Menu from './menu'

import Logo from '../../common/assets/images/logo.png'


class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position='static' color='primary'>
                <Toolbar className='flex-left'>
                    <div className="logo-container">
                        <img src={Logo} className="logo" />
                    </div>
                    <Menu />
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Index)