import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setRegistrationData } from '../../redux/actions/registraionForm'
import { 
    Box,
    FormControl,
    InputLabel,
    Input,
    Fab,
    Snackbar
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md'

import { SELLER_REGISTRATION_STEP_3} from '../../common/script/url'
import { register } from '../../common/script/api'
import axios from 'axios'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const successMsg = "Account created successfully! Password is sent to your email. You will be redirected to login."
const errMsg = "Something went wrong"

class Step4 extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            disableNext: true,
            link: '',
            open: false,
            severity: 'success',
            msg: successMsg
        }

        this.checkInput = this.checkInput.bind(this)
        this.preventDefault = this.preventDefault.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    checkInput(){
        const form  = document.getElementById('seller-registration-form')
        const organizationName = form['organizationName'].value
        const organizationScope = form['organizationScope'].value
        const organizationNature = form['organizationNature'].value
        const gstNo = form['gstNo'].value
        const designation = form['designation'].value

        if(gstNo.length != 0 && organizationName.length != 0 && organizationScope.length != 0 && organizationNature.length != 0 && designation.length != 0){
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
        else{
            e.preventDefault()
            this.submitForm()
        }
    }

    submitForm(){
        this.setState({disableNext: true})
        const form  = document.getElementById('seller-registration-form')
        
        const {
            email, 
            contact, 
            name, 
            s_d_w,
            permanent,
            present,
            alternativeContact,
            pan,
            aadhar,
            aadharImage, panImage, avatar
        } = this.props.registrationFormData

        const organizationName = form['organizationName'].value
        const organizationScope = form['organizationScope'].value
        const organizationNature = form['organizationNature'].value
        const gstNo = form['gstNo'].value
        const designation = form['designation'].value

        let body = new FormData()
        body.append('email', email)
        body.append('number', contact)
        body.append('name', name)
        body.append('parentName', s_d_w)
        body.append('permanentAddress', permanent)
        body.append('currentAddress', present)
        body.append('alternateNumber', alternativeContact)
        body.append('panno', pan)
        body.append('aadharno', aadhar)
        body.append('destination', designation)
        body.append('organisationName', organizationName)
        body.append('organisationNature', organizationNature)
        body.append('gstNo', gstNo)
        body.append('organisationScope', organizationScope)
        body.append('image', avatar)
        body.append('image', aadharImage)
        body.append('image', panImage)

        console.log(body)

        axios.post(register, body, {
            cancelToken: this._source.token,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })
        .then(data=>{
            if(data.status == 200){
                this.setState({
                    msg: successMsg,
                    severity: 'success',
                    open: true
                })
                setTimeout(()=>{
                    this.props.history.push('/seller/login')
                }, 10000)
            }

            else{
                this.setState({
                    msg: errMsg,
                    severity: 'error',
                    open: true
                })
            }
        })
        .catch((err) =>{
            console.log('error occurred', err)
            this.setState({
                msg: errMsg,
                severity: 'error',
                open: true
            })
            this.setState({disableNext: false})
        })
    }

    handleClose(){
        this.setState({open: false})
    };

    componentDidMount(){
        this._source = axios.CancelToken.source()
        const {  organizationName, organizationScope, organizationNature, gstNo, designation } = this.props.registrationFormData
        const form  = document.getElementById('seller-registration-form')
        form['organizationName'].value = organizationName
        form['organizationScope'].value = organizationScope
        form['organizationNature'].value = organizationNature
        form['gstNo'].value = gstNo
        form['designation'].value = designation

        if(gstNo.length != 0 && organizationName.length != 0 && organizationScope.length != 0 && organizationNature.length != 0 && designation.length != 0)
            this.setState({disableNext: false})
    }


    componentWillUnmount(){
        this._source.cancel()
    }

    render(){
        const { open, msg, severity } = this.state
        return(
            <Box display="flex" flexDirection="column" flex="1">
                <Box>

                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="designation" color="secondary">Designation in the Organization</InputLabel>
                        <Input id="designation" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="organizationName" color="secondary">Organization Name</InputLabel>
                        <Input id="organizationName" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="organizationNature" color="secondary">Organization Nature</InputLabel>
                        <Input id="organizationNature" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="organizationScope" color="secondary">Organization Scope</InputLabel>
                        <Input id="organizationScope" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="gstNo" color="secondary">GST No</InputLabel>
                        <Input id="gstNo" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput}/>
                    </FormControl>
                    
                </Box>
                <Box mt={2} display="flex" justifyContent='space-around' flex="1" alignItems="flex-end">
                    <Link to={SELLER_REGISTRATION_STEP_3}>
                        <Fab color='secondary' arial-label='next' size='medium'>
                            <MdKeyboardArrowLeft className='login-next-icon' />
                        </Fab>
                    </Link>

                    <Link to={''} onClick={(e)=>this.preventDefault(e)}>
                        <Fab color='secondary' arial-label='next' size='medium' disabled={this.state.disableNext}>
                            <MdCheck className='login-next-icon' />
                        </Fab>
                    </Link>
                </Box>
                <Snackbar open={open} autoHideDuration={10000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={severity}>
                        {msg}
                    </Alert>
                </Snackbar>
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

export default withRouter(connect(mapStateToProps, mapActionToState)(Step4))