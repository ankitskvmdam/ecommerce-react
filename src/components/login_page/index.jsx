import React from 'react'
import { withRouter, Link} from 'react-router-dom'
import { 
    Typography,
    Box,
    Container,
    FormControl,
    InputLabel,
    Input,
    Paper,
    Fab
} from '@material-ui/core'

import { SELLER_REGISTRATION } from '../../common/script/url'

import { MdKeyboardArrowRight } from 'react-icons/md'

class Index extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            disableNext: true,
        }

        this.submit = this.submit.bind(this)
        this.checkInput = this.checkInput.bind(this)
    }

    submit(){
        this.setState({
            disableNext: true
        })

        const form  = document.getElementById('seller-login-form')
        const email = form['email'].value
        const password = form['password'].value

        console.log(email, password)
    }

    checkInput(){
        const form  = document.getElementById('seller-login-form')
        const email = form['email'].value
        const password = form['password'].value

        if(email.length !=0 && password.length != 0){
            this.setState({disableNext: false})
        }
        else{
            this.setState({disableNext: true})
        }
    }


    render(){

        const { disableNext} = this.state
        return(
            <Container maxWidth='lg'>
                <Box display="flex" justifyContent='center' alignItems='center' mt={2}>
                    <Paper elevation={3}>
                        <form className='login-form flex-align-center flex-col' id='seller-login-form'>
                            <Typography variant="h3" gutterBottom>
                                Login
                            </Typography>
                            <FormControl fullWidth={true} margin='normal'>
                                <InputLabel htmlFor="email" color="secondary">Email address</InputLabel>
                                <Input id="email" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                            </FormControl>

                            <FormControl fullWidth={true} margin='normal'>
                                <InputLabel htmlFor="password" color="secondary">Password</InputLabel>
                                <Input id="password" color="secondary" fullWidth={true} type='password' required onChange={this.checkInput}/>
                            </FormControl>

                            <Box mt={2}>
                                <Fab color='secondary' arial-label='next' size='medium' disabled={disableNext} onClick={this.submit}>
                                    <MdKeyboardArrowRight className='login-next-icon' />
                                </Fab>
                            </Box>
                            <Box mt={2}>
                                <Link to={SELLER_REGISTRATION}>
                                    <Typography color="secondary">
                                        Create Account
                                    </Typography>
                                </Link>
                            </Box>
                        </form>
                    </Paper>
                </Box>
            </Container>
        )
    }
}

export default withRouter(Index)