
import React from 'react'

import { 
    Card,
    CardContent,
    Typography,
    Button,
    CardActions,
    Box,
    Chip
} from '@material-ui/core'

class CircleCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { title, buttonTitle, cardClass, mediaClass, imageLink, imageTitle, description, price, tag } = this.props
        return(
            <Card className={cardClass}>
                <Box display="flex" justifyContent='center'>
                    <img className={mediaClass}
                        src = {imageLink}
                        title = {imageTitle}
                    />
                    <Chip label={tag} color="primary" size="small" className="card-label" />
                </Box>
                <CardContent style={{flex: 1}}>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                        {description}
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary">
                        {buttonTitle}
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

CircleCard.defaultProps = { 
    title: '',
    buttonTitle: 'View',
    cardClass: '',
    mediaClass: '',
    imageLink: '',
    imageTitle: '',
    description: '',
    price: '',
    tag: ''
}
export default CircleCard