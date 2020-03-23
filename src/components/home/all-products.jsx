import React from 'react'
import { 
    Typography,
    Box
} from '@material-ui/core'

import AllProductCard from './all-product-card'

class AllProducts extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            products: [
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
                {
                    image: 'https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/u/m/z/apple-mr7f2hn-a-original-imaf46kh3wvufeme.jpeg',
                    title: 'Ipad Pro (7th Gen) 10.2',
                    price: 'Rs. 29,9000',
                    description: 'Ipad Pro (7th Gen) 10.2, 32 GB, Wifi Only, Processor: A10 Fusion Chip with 64-bit Architecture with Embedded M10 Coprocessor, 24.64 cm (9.7 inch) Quad HD Display'
                },
            ]
        }
    }

    render(){
        return(
            <Box p={2}>
                <Typography variant="h4" className="flex-center">
                    All Products
                </Typography>
                <Box pt={2} pb={2} display="flex" justifyContent='space-around'  flexWrap='wrap'>
                    {this.state.products.map((item, key)=>{
                        return <AllProductCard 
                                    key={key}
                                    imageLink={item.image}
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