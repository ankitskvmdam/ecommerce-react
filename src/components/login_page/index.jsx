import React from 'react'
import { withRouter } from 'react-router-dom'
import { 
    Typography,
    Box,
    Container,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Paper,
    Fab
} from '@material-ui/core'

import classnames from 'classnames'

import { MdKeyboardArrowRight } from 'react-icons/md'

class Index extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            disableNext: false,
            showOTP: false
        }

        this.submitEmail = this.submitEmail.bind(this)
        this.submitOTP = this.submitOTP.bind(this)
        this.submit = this.submit.bind(this)
    }

    submitEmail(){
        const form = document.getElementById('seller-login-form')
        const email = form['email'].value

        console.log(email)

        this.setState({
            showOTP: true,
            disableNext: false
        })
    }

    submitOTP(){
        const form = document.getElementById('seller-login-form')
        const email = form['email'].value
        const otp = form['otp'].value
        console.log(email, otp)

        this.setState({
            disableNext: false
        })
    }

    submit(){
        this.setState({
            disableNext: true
        })

        this.state.showOTP ? this.submitOTP() : this.submitEmail()
    }

    render(){

        const { showOTP, disableNext} = this.state
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
                                <Input id="email" aria-describedby="my-helper-text" color="secondary" fullWidth={true}/>
                                <FormHelperText id="my-helper-text">We'll sent an OTP to your email.</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth={true} className={classnames({ 'hidden': !showOTP})} margin='normal'>
                                <InputLabel htmlFor="otp" color="secondary">One Time Password</InputLabel>
                                <Input id="otp" aria-describedby="my-helper-text" color="secondary" fullWidth={true}/>
                                <FormHelperText id="my-helper-text">Please check your email for OTP.</FormHelperText>
                            </FormControl>

                            <Box mt={2}>
                                <Fab color='secondary' arial-label='next' size='medium' disabled={disableNext} onClick={this.submit}>
                                    <MdKeyboardArrowRight className='login-next-icon' />
                                </Fab>
                            </Box>
                        </form>
                    </Paper>
                </Box>
            </Container>
        )
    }
}

export default withRouter(Index)