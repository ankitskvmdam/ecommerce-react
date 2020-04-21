import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { setRegistrationData } from '../../redux/actions/registraionForm'
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

import { SELLER_REGISTRATION_STEP_2, SELLER_REGISTRATION_STEP_4 } from '../../common/script/url'

class Step3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            disableNext: true,
            link: ''
        }

        this.checkInput = this.checkInput.bind(this)
        this.preventDefault = this.preventDefault.bind(this)
    }

    checkInput() {
        const form = document.getElementById('seller-registration-form')
        const aadhar = form['aadhar'].value
        const pan = form['pan'].value
        const aadharImage = form['aadharImage']
        const panImage = form['panImage']


        if (aadharImage.files[0] && aadharImage.files[0].size >= 512001) {
            alert('File size is greater that 500kb')
            aadharImage.value = ""
        }

        if (panImage.files[0] && panImage.files[0].size >= 512001) {
            alert('File size is greater that 500kb')
            panImage.value = ""
        }

        if (aadhar.length != 0 && pan.length != 0 && aadharImage.files[0] && panImage.files[0] && panImage.files[0].size < 512001 && aadharImage.files[0].size < 512001) {
            this.props.setRegistrationData({
                aadhar,
                pan,
                panImage: panImage.files[0],
                aadharImage: aadharImage.files[0]
            })

            this.setState({ disableNext: false })
        }
        else {
            this.setState({ disableNext: true })
        }
    }

    preventDefault(e) {
        if (this.state.disableNext) {
            e.preventDefault()
        }
    }

    componentDidMount() {
        const { aadhar, pan, aadharImage, panImage } = this.props.registrationFormData
        const form = document.getElementById('seller-registration-form')

        form['aadhar'].value = aadhar
        form['pan'].value = pan

        if (aadhar.length != 0 && pan.length != 0 && aadharImage && panImage)
            this.setState({ disableNext: false })
    }

    render() {
        return (
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
                        <Input id="aadhar" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput} />
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <Button variant="outlined">
                            Upload aadhar (only jpeg, max: 500kb)&nbsp;&nbsp;&nbsp;
                            <input type="file" accept="image/jpeg" id="aadharImage" onChange={this.checkInput} />
                        </Button>
                    </FormControl>
                    <FormControl fullWidth={true} margin='dense'>
                        <InputLabel htmlFor="pan" color="secondary">Pan Number</InputLabel>
                        <Input id="pan" color="secondary" fullWidth={true} type='text' required onChange={this.checkInput} />
                    </FormControl>
                    <FormControl fullWidth={true} margin='normal'>
                        <Button variant="outlined">
                            Upload pan (only jpeg, max: 500kb)&nbsp;&nbsp;&nbsp;
                            <input type="file" accept="image/jpeg" id="panImage" onChange={this.checkInput} />
                        </Button>
                    </FormControl>

                </Box>
                <Box mt={2} display="flex" justifyContent='space-around' flex="1" alignItems="flex-end">
                    <Link to={SELLER_REGISTRATION_STEP_2}>
                        <Fab color='secondary' arial-label='next' size='medium'>
                            <MdKeyboardArrowLeft className='login-next-icon' />
                        </Fab>
                    </Link>

                    <Link to={SELLER_REGISTRATION_STEP_4} onClick={(e) => this.preventDefault(e)}>
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
    setRegistrationData: (data) => dispatch(setRegistrationData(data))
})

export default withRouter(connect(mapStateToProps, mapActionToState)(Step3))