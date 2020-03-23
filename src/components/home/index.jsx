import React from 'react'
import { withRouter } from 'react-router-dom'
import ShopByCatergory from './shop-by-catergory'
import AllProducts from './all-products'
import { 
    Container
} from '@material-ui/core'
class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container maxWidth='lg'>
                <ShopByCatergory />
                <AllProducts />
            </Container>
        )
    }
}

export default withRouter(Index)