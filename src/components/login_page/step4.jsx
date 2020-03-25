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
} from '@material-ui/core'

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md'

import { SELLER_REGISTRATION_STEP_3} from '../../common/script/url'

class Step4 extends React.Component{
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
    }

    componentDidMount(){
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

    render(){
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