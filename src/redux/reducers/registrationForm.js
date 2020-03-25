import { REGISTRATION_DATA_UPDATE } from '../constants/registrationForm'

const initialState = {
    email: '',
    avatar: '',
    contact: '',
    alternativeContact: '',
    name: '',
    s_d_w: '',
    permanent: '',
    present: '',
    sex: '',
    dob: '',
    pan: '',
    aadhar: '',
    aadharImage: '',
    panImage: '',
    organizationName: '',
    organizationScope: '',
    organizationNature: '',
    gstNo: '',
    designation: ''

}

const registrationFormData = (state = initialState, action) => {
    switch(action.type){
        case REGISTRATION_DATA_UPDATE:
            return state = Object.assign({}, state, action.data)

        default:
            return state
    }
}

export default registrationFormData