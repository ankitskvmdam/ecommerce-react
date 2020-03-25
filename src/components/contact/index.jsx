import React from 'react'
import { withRouter } from 'react-router-dom'

import { 
    Typography,
    Box,
    Container,
    Paper
} from '@material-ui/core'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container maxWidth='lg'>
                <Box mt={2}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variatnt="h3">
                                Contact us
                            </Typography>

                            <Typography variatnt="body2">
                                Name: -- Zaiba Ibrahim <br />
                                Wife of: --Irfan Ahmed <br />
                                Address: -- 1 st Floor, Back Side no.2, 6 th cross, Vinayakanagar, J.P. Nagar 5 th phase <br />
                                Bangalore -560078, Karnataka (India) <br />
                                Phone: -- <a href="tel:+9196829-97016">+9196829-97016</a> / <a href="tel:7975185058">7975185058</a> <br />
                                Email: -- <a href="mailto:zaibaibrahim0704@gmail.com">zaibaibrahim0704@gmail.com</a> <br />
                            </Typography>
                        </Box>

                    </Paper>
                </Box>
            </Container>
        )

    }
}

export default withRouter(Index)