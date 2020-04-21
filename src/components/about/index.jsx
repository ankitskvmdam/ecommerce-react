import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Paper } from '@material-ui/core'
import { MdKeyboardArrowRight } from 'react-icons/md'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container maxWidth='md' className="about-us">
                <Box p={2}>
                    <Paper className="paper-about" elevation={3}>
                        <Typography variant="h2" color='primary'>
                            About Us
                    </Typography>
                        <Typography variant="body1" gutterBottom>
                            Implex Cart International is founded with the goal of providing the Best platform
                            for the customers to get the best products up to their choice at the best affordable
                            level. As we know the recent data of world economy tell that India stands on third
                            rank according to purchasing capacity. This is the key to our work. By the next few
                            years India will be the most populous country having the largest number of the
                            youth who must face the future challenges.
                    </Typography>
                        <Typography variant="body1" gutterBottom>
                            Implex Cart International is founded with the goal of providing the Best platform
                            for the customers to get the best products up to their choice at the best affordable
                            level. As we know the recent data of world economy tell that India stands on third
                            rank according to purchasing capacity. This is the key to our work. By the next few
                            years India will be the most populous country having the largest number of the
                            youth who must face the future challenges.
                    </Typography>
                        <Typography variant="body1" gutterBottom>
                            Implex Cart International is founded with this goal to meet the need of each
                            ordinary people so that each &amp; every people can lead his/her life very comfortably,
                            can touch the highest peak of his/her life.
                    </Typography>
                        <Typography variant="body1" gutterBottom>
                            Implex Cart International wills to work in all the aspects of human life standards
                            will come into the achievement of his/her income routine. Everyone should lead to
                            a prosperous life. Generally, it is found that human wants/needs have mainly the
                            following aspects

                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Physical aspects</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Financial aspects</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Psychological aspects</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Spiritual aspects</ListItemText>
                            </ListItem>
                        </List>

                        <Typography variant="body1" gutterBottom>
                            Here we are willing to work in all the aspects of human wants.
                    </Typography>
                    </Paper>
                </Box>

                <Box p={2}>
                    <Paper className="paper-about" elevation={3}>
                        <Typography variant="h2" color='primary'>
                            Our Vision
                    </Typography>

                        <Typography variant="body1" gutterBottom>
                            Implex Cart International is founded with a great vision. Our vision can be
                            expressed in the following words: -
                    </Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Providing the Best Quality Products to customers at their best affordable range.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Providing the Best Variety of Products so that the needs of customers can be sorted out.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Providing the Best Platform for the manufacturer so that they can be Pro Marketing Handles.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Enhancing the Innovative Ideas.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Promoting the Start-Ups, New Inventions, New Ideas, New Experiments.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Creating the needs satisfactory oriented environment.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Minimizing the gap between the interest of customer, that of the manufacturers, and that of the service providers.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>Providing the vastest scale of Customers for the Manufacturers &amp; Suppliers.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>To soot the needs of all the people without any confinement of caste, creed, colour, geography, origination, etc.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <MdKeyboardArrowRight />
                                </ListItemAvatar>
                                <ListItemText>To create employments/opportunities for all section of society without any discrimination of caste, creed, colour, birthplace, gender, etc.</ListItemText>
                            </ListItem>
                        </List>
                        <Typography variant="body1" gutterBottom>
                            Above mentioned goals don’t express our VISION completely. These are only to show the main diagram of our Vision.
                    </Typography>
                    </Paper>
                </Box>
            </Container>
        )
    }
}

export default withRouter(Index)