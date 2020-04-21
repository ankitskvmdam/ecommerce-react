import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    Typography,
    Box,
    Container,
    Paper
} from '@material-ui/core'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container maxWidth='lg'>
                <Box mt={2}>
                    <Paper elevation={3}>
                        <Box p={2}>
                            <Typography variant="h3">
                                Contact us
                            </Typography>

                            <Typography variatnt="body2">
                                IMPLEX CART INTERNATIONAL <br />
                                384/II D 2nd floor, <br />
                                Kuvempunagar, <br />
                                Thavrekere Post, MAGADI MAIN ROAD, BANGALORE 562130. KARNATAKA INDIA <br />
                                Phone: -- <a href="tel:+919886964861">+919886964861</a> <br />
                                Email: -- <a href="mailto:contact@saleimplexcartonline">contact@saleimplexcartonline</a> <br />
                            </Typography>
                        </Box>

                    </Paper>
                </Box>
            </Container>
        )

    }
}

export default withRouter(Index)