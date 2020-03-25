import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { 
    Box,
    FormControl,
    InputLabel,
    Input,
    Fab,
    Button
} from '@material-ui/core'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import { SELLER_REGISTRATION_STEP_2} from '../../common/script/url'
import { setRegistrationData } from '../../redux/actions/registraionForm'

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
        const contact = form['contact'].value
        const name = form['name'].value

        if(email.length !=0 && name.length != 0 && contact.length != 0){
            this.setState({disableNext: false})

            this.props.setRegistrationData({
                email,
                contact,
                name
            })

        }

        else{
            this.setState({disableNext: true})
        }
    }

    componentDidMount(){
        const { email, contact, name } = this.props.registrationFormData
        const form  = document.getElementById('seller-registration-form')
        form['name'].value = name
        form['email'].value = email
        form['contact'].value = contact

        if(name.length != 0 && email.length !=0 && contact.length != 0)
            this.setState({disableNext: false})
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
                        <InputLabel htmlFor="name" color="secondary">Full Name</InputLabel>
                        <Input id="name" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <Button variant="outlined">
                            Upload Your Photo &nbsp;&nbsp;&nbsp;
                            <input type="file" accept="image/*" id="avatar" onChange={this.checkInput} />
                        </Button>
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <InputLabel htmlFor="email" color="secondary">Email address</InputLabel>
                        <Input id="email" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                    </FormControl>

                    <FormControl fullWidth={true} margin='normal'>
                        <InputLabel htmlFor="contact" color="secondary">Contact</InputLabel>
                        <Input id="contact" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
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

const mapStateToProps = (store) => ({
    registrationFormData: store.registrationFormData
})

const mapActionToState = (dispatch) => ({
    setRegistrationData: (data)=>dispatch(setRegistrationData(data))
})

export default withRouter(connect(mapStateToProps, mapActionToState)(Step1))