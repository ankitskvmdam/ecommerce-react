import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { 
    Box,
    FormControl,
    InputLabel,
    Input,
    Fab,
} from '@material-ui/core'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import { SELLER_REGISTRATION_STEP_3, SELLER_REGISTRATION_STEP_1 } from '../../common/script/url'
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
        const name = form['name'].value
        const s_d_w = form['s_d_w'].value
        const permanent = form['permanent'].value
        const present = form['present'].value
        if(name.length != 0 && present.length != 0 && permanent.length != 0 && s_d_w.length != 0){
            this.setState({disableNext: false})
            this.props.setRegistrationData({
                name,
                s_d_w,
                permanent,
                present
            })
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
        const { name, s_d_w, permanent, present } = this.props.registrationFormData
        const form  = document.getElementById('seller-registration-form')
        form['name'].value = name
        form['s_d_w'].value = s_d_w
        form['permanent'].value = permanent
        form['present'].value = present

        if(name.length != 0 && present.length != 0 && permanent.length != 0 && s_d_w.length != 0)
            this.setState({disableNext: false})
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
                        <InputLabel htmlFor="s_d_w" color="secondary">S/o, D/o, W/o</InputLabel>
                        <Input id="s_d_w" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <InputLabel htmlFor="permanent" color="secondary">Permanent Address</InputLabel>
                        <Input id="permanent" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <InputLabel htmlFor="present" color="secondary">Present Address</InputLabel>
                        <Input id="present" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                    </FormControl>
                </Box>
                <Box mt={2} display="flex" justifyContent='space-around' flex="1" alignItems="flex-end">
                    <Link to={SELLER_REGISTRATION_STEP_1}>
                        <Fab color='secondary' arial-label='next' size='medium'>
                            <MdKeyboardArrowLeft className='login-next-icon' />
                        </Fab>
                    </Link>

                    <Link to={SELLER_REGISTRATION_STEP_3} onClick={(e)=>this.preventDefault(e)}>
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