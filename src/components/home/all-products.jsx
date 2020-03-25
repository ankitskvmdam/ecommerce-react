import React from 'react'
import { 
    Typography,
    Box
} from '@material-ui/core'

import AllProductCard from './all-product-card'
import axios from 'axios'

import { getProducts, base } from '../../common/script/api'

class AllProducts extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            products: []
        }

        this.fetchProducts = this.fetchProducts.bind(this)
    }

    fetchProducts(){
        this._source = axios.CancelToken.source()
        console.log(getProducts)
        console.log('fetching data')
        axios.get(getProducts, { cancelToken: this._source.token})
        .then( data => {
            // console.log(getProducts)
            console.log(data)
            // this.setState({products: data.data})
        })
        .catch(err =>{
            console.log('Error while fetching: ', err)
        })
    }

    componentDidMount(){
        this._source = ''
        this.fetchProducts()
    }

    componentWillUnmount(){
        if(this._source != '')
            this._source.cancel()
    }

    render(){

        const { products } = this.state

        if( products.length == 0){
            return (
                <Box p={2}>
                    <Typography variant="h4" className="flex-center">
                        All Products
                    </Typography>
                    Loading...
                </Box>
            )
        }
        
        return(
            <Box p={2}>
                <Typography variant="h4" className="flex-center">
                    All Products
                </Typography>
                <Box pt={2} pb={2} display="flex" justifyContent='space-around'  flexWrap='wrap'>
                    {this.state.products.map((item, key)=>{
                        return <AllProductCard 
                                    key={key}
                                    tag={item.tag}
                                    imageLink={item.avatar}
                                    title={item.title}
                                    description={item.description}
                                    imageTitle={item.title}
                                    price={item.price}
                                    cardClass='product-card'
                                    mediaClass='image'
                                    buttonTitle='View'
                        />
                    })}
                </Box>
            </Box>
        )
    }
}

export default AllProducts