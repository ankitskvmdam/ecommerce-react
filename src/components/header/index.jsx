import React from 'react'
import { withRouter, NavLink as Link } from 'react-router-dom'

import {AppBar, Toolbar, Button, Typography} from '@material-ui/core'

// URL
import { SELLER_LOGIN, HOME, ABOUT, CONTACT } from '../../common/script/url'

class Index extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            links: [
                <Link to={HOME} activeClassName="nav-active">Home</Link>,
                <Link to={SELLER_LOGIN} activeClassName="nav-active">Sell with us</Link>,
                <Link to={ABOUT} activeClassName="nav-active">About</Link>,
                <Link to={CONTACT} activeClassName="nav-active">Contact us</Link>,
            ]
        }
    }

    render(){
        return(
            <AppBar position='static' color='primary'>
                <Toolbar className='flex-left'>
                    <Typography className="flex-1" variant="h4">
                        Implex
                    </Typography>
                    {this.state.links.map((item, key) => {
                        return(
                            <div className="item" key={key}>
                                <Button>
                                    {item}
                                </Button>
                            </div>
                        )
                    })}
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Index)