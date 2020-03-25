import React from 'react'
import { withRouter, Route, Switch, Link } from 'react-router-dom'
import { 
    Typography,
    Box,
    Container,
    Paper,
} from '@material-ui/core'

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'

import { SELLER_REGISTRATION_STEP_3, SELLER_REGISTRATION_STEP_1, SELLER_REGISTRATION_STEP_2, SELLER_LOGIN, SELLER_REGISTRATION_STEP_4 } from '../../common/script/url'

class Registraion extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Container maxWidth='lg'>
                <Box display="flex" justifyContent='center' alignItems='center' mt={2} flex="1">
                    <Paper elevation={3}>
                        <Box pt={2} pl={2} mb={-4}>
                            <Link to={SELLER_LOGIN}>
                                <Typography color="secondary">
                                    Login
                                </Typography>
                            </Link>
                        </Box>
                        <form className='login-form flex-align-center flex-col' id='seller-registration-form'>
                            <Typography variant="h3" gutterBottom>
                                Registraion
                            </Typography>
                            <Switch>
                                <Route path={SELLER_REGISTRATION_STEP_1} component={Step1} exact={true}/>
                                <Route path={SELLER_REGISTRATION_STEP_2} component={Step2} exact={true}/>
                                <Route path={SELLER_REGISTRATION_STEP_3} component={Step3} exact={true}/>
                                <Route path={SELLER_REGISTRATION_STEP_4} component={Step4} exact={true}/>
                            </Switch>
                        </form>
                    </Paper>
                </Box>
            </Container>
        )
    }
}

export default withRouter(Registraion)