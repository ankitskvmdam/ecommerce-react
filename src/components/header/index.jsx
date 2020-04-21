import React from 'react'
import { withRouter, NavLink as Link } from 'react-router-dom'

import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import Menu from './menu'

// URL
import { SELLER_LOGIN, HOME, ABOUT, CONTACT } from '../../common/script/url'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position='static' color='primary'>
                <Toolbar className='flex-left'>
                    <Typography className="flex-1" variant="h4">
                        Implex
                    </Typography>
                    <Menu />
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Index)