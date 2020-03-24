import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { 
    Box,
    FormControl,
    InputLabel,
    Input,
    Fab
} from '@material-ui/core'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import { SELLER_REGISTRATION_STEP_2} from '../../common/script/url'

class Step1 extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            disableNext: true,
            link: ''
        }

        this.checkInput = this.checkInput.bind(this)
        this.preventDefault = this.preventDefault.bind(this)
    }

    checkInput(){
        const form  = document.getElementById('seller-registration-form')
        const email = form['email'].value
        const password = form['password'].value

        if(email.length !=0 && password.length != 0){
            this.setState({disableNext: false})
        }
        else{
            this.setState({disableNext: true})
        }
    }

    preventDefault(e){
        if(this.state.disableNext){
            e.preventDefault()
        }
    }

    render(){
        return(
            <Box display="flex" flexDirection="column" flex="1">
                <Box>
                    <FormControl fullWidth={true} margin='normal'>
                        <InputLabel htmlFor="email" color="secondary">Email address</InputLabel>
                        <Input id="email" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                    </FormControl>

                    <FormControl fullWidth={true} margin='normal'>
                        <InputLabel htmlFor="password" color="secondary">Password</InputLabel>
                        <Input id="password" color="secondary" fullWidth={true} type='password' required onChange={this.checkInput}/>
                    </FormControl>
                </Box>
                <Box mt={2} display="flex" justifyContent='space-around' flex="1" alignItems="flex-end">
                    <Fab color='secondary' arial-label='next' size='medium' disabled={true}>
                        <MdKeyboardArrowLeft className='login-next-icon' />
                    </Fab>

                    <Link to={SELLER_REGISTRATION_STEP_2} onClick={(e)=>this.preventDefault(e)}>
                        <Fab color='secondary' arial-label='next' size='medium' disabled={this.state.disableNext}>
                            <MdKeyboardArrowRight className='login-next-icon' />
                        </Fab>
                    </Link>
                </Box>
            </Box>
        )
    }
}

export default withRouter(Step1)