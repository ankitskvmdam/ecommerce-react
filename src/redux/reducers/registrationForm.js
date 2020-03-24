import { REGISTRATION_DATA_UPDATE } from '../constants/registrationForm'

const initialState = {
    email: '',
    password: '',
    contact: '',
    alternative_contact: '',
    name: '',
    s_d_w: '',
    permanent: '',
    present: '',
    sex: '',
    dob: '',
    pan: '',
    aadhar: '',
    avatar: '',
    aadharImage: '',
    panImage: '',
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