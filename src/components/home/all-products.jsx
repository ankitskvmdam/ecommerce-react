import React from 'react'
import { 
    Typography,
    Box
} from '@material-ui/core'

class AllProducts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Box p={2}>
                <Typography variant="h4" className="flex-center">
                    All Products
                </Typography>
            </Box>
        )
    }
}

export default AllProducts