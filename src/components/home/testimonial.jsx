import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Sales from '../../common/assets/images/sales.jpg'
class Testimonial extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Box pr={10} pt={7} pl={10} pb={7} display="flex" className="testimonial">
                <Box className="photo-container" display="flex" alignItems="center" justifyContent="center" p={3}>
                    <div className="photo">
                        <img src={Sales} alt="Rakesh Roy" />
                    </div>

                </Box>
                <Box className="ceo-message" flex="1" p={3}>
                    <Typography variant="h5">
                        Message from CEO
                    </Typography>
                    <Typography variant="body1">
                        Welcome to one and all to this platform of E-commerce which will be hereby know as IMPLEX CART INTERNATIONAL.
                        We are going to work on few things specially Service, Quality and ethics. Our Team will be a combination of intelligence and experience. I Gourav Bothra has been Given the responsibility of CEO of this Organization. My and my Team is fully dedicated to make every thinks handy to each and every citizen of this world.
                        <br /><br />
                        EXCELLENCE , COURAGE and INTEGRITY  these are three fundamental qualities of IMPLEX CART INTERNATIONAL.
                        "We believe that effective  Company founded on a deep serve or facility for customers thrive. We encourage to our Team to take innovative ideas for reach the basic concept underlying each customers.
                        We Aim at E-commerce PHILOSOPHY which is centre on praise ENTHUSIASM, ENCOURAGEMENT and AFFECTION. We pride ourselves on our company provide a good Quality product to customers.
                        I would take to this opportunity to thank Mr. Gourav sir for his invaluable support and guidance and my Team for helping in every endeavors.
                        We welcome your interest in our company.
                        <br /><br />
                        Thanks and Regards,<br />
                        Er. Rakesh Roy <br />
                        Assistant Officer Sales and Grievance<br />
                    </Typography>
                </Box>
            </Box>
        )
    }
}

export default Testimonial