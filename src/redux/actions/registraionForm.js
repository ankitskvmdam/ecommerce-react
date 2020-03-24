import { REGISTRATION_DATA_UPDATE } from '../constants/registrationForm'

const setRegistrationData = (data) => ({
    type: REGISTRATION_DATA_UPDATE,
    data: data
})

export {
    setRegistrationData
}