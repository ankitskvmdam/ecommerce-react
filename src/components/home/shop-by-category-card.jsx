import React from 'react'

import { 
    Card,
    CardContent,
    Typography,
    Button,
    CardActions
} from '@material-ui/core'

class CircleCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { title, buttonTitle, className } = this.props
        return(
            <Card className={className}>
                <CardContent>
                    <Typography variant="h5">
                        {title}
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
    buttonTitle: 'Explore',
    className: ''
}
export default CircleCard