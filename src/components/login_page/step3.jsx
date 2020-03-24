import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { 
    Box,
    FormControl,
    InputLabel,
    Input,
    Fab,
    TextField,
    Button,
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
                        <TextField
                            label="Date of birth"
                            id="dob"
                            type='date'
                            color="secondary"
                            defaultValue="1982-01-01"
                        />
                    </FormControl>

                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="aadhar" color="secondary">Aadhar Number</InputLabel>
                        <Input id="aadhar" color="secondary" fullWidth={true} type='input' required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <Button variant="outlined">
                            Upload aadhar &nbsp;&nbsp;&nbsp;
                            <input type="file" accept="image/*" id="aadharImage" onChange={this.checkInput} />
                        </Button>
                    </FormControl>
                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="pan" color="secondary">Pan Number</InputLabel>
                        <Input id="pan" color="secondary" fullWidth={true} type='password' required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <Button variant="outlined">
                            Upload pan &nbsp;&nbsp;&nbsp;
                            <input type="file" accept="image/*" id="panImage" onChange={this.checkInput} />
                        </Button>
                    </FormControl>
                    
                </Box>
                <Box mt={2} display="flex" justifyContent='space-around' flex="1" alignItems="flex-end">
                    <Link to={SELLER_REGISTRATION_STEP_2}>
                        <Fab color='secondary' arial-label='next' size='medium'>
                            <MdKeyboardArrowLeft className='login-next-icon' />
                        </Fab>
                    </Link>

                    <Link to={''} onClick={(e)=>this.preventDefault(e)}>
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