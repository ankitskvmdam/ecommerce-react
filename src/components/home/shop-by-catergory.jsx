import React from 'react'
import CatergoryCard from './shop-by-category-card'

import { 
    Typography,
    Box
} from '@material-ui/core'

class ShopByCatergory extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            catergory: ['Electronics', 'Fashion', 'Books']
        }
    }

    render(){
        return(
            <Box p={2}>
                <Typography variant="h4" className="flex-center">
                    Featured Catergories
                </Typography>
                <Box pt={2} pb={2} display="flex" justifyContent='space-around' flexWrap='wrap'>
                    {this.state.catergory.map((item, key)=>{
                        return <CatergoryCard title={item} key={key} className='catergory-card'/>
                    })}
                </Box>
            </Box>
        )
    }
}

export default ShopByCatergory