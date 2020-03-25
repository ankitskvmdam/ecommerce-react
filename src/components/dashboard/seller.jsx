import React from 'react'
import { withRouter } from 'react-router-dom'

import { 
    Box,
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button
} from '@material-ui/core'

import axios from 'axios'
import { getProducts, base } from '../../common/script/api'
import classnames from 'classnames'
import PostProduct from './post-product'

class Seller extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            allProducts: [],
            create: false,
            name: localStorage.getItem('NAME')
        }

        this.fetchProducts = this.fetchProducts.bind(this)
        this.logout = this.logout.bind(this)
    }

    fetchProducts(){
        axios.get(getProducts, { cancelToken: this._source.token})
        .then( data =>{
            let d = data.data.data
            let user = localStorage.getItem('USER')
            let filterdata = []
            
            let i

            for(i=0; i < d.length; i++){
                if(d[i].user == user)
                    filterdata.push(d[i])
            }
            this.setState({allProducts: filterdata})

            if(filterdata.length == 0 ){
                this.setState({create: true})
            }
        })
    }

    logout(){
        localStorage.removeItem('LOGIN')
        localStorage.removeItem('TYPE')
        localStorage.removeItem('USER')
        this.props.history.push('/home')
    }

    componentDidMount(){
        this._source = axios.CancelToken.source()

        if(localStorage.getItem('LOGIN') != 'true')
            this.props.history.push('/seller/login')
        this.fetchProducts()
    }

    componentWillUnmount(){
        if(this._source != '')
            this._source.cancel()
    }

    render(){

        const name = this.state.name || ''
        return(
            <Container maxWidth='lg'>
                <Box p={2}>
                    <Typography variant="h2">
                       Hi, {name}!
                    </Typography>
                    <Typography variant="h4">
                        Seller Dashboard
                    </Typography>

                    <Button color="secondary" onClick={this.logout}>
                        Logout
                    </Button>

                    <Paper elevation={2}>
                        <Box p={2}>
                            <Typography variant="h4">
                                My Product
                            </Typography>
                            <List>
                                {this.state.allProducts.map((item, key)=>{
                                    return (
                                        <ListItem key={key}>
                                            <ListItemIcon>
                                                <img src={base+item.avatar} className="admin-user-image"/>
                                            </ListItemIcon>
                                            <ListItemText>{item.title}</ListItemText>
                                        </ListItem>
                                    )
                                })}
                            </List>

                            <Box className={classnames({"hidden": !this.state.create})}>
                                <PostProduct />
                            </Box>
                        </Box>
                    </Paper>
                </Box>

            </Container>
        )
    }
}

export default withRouter(Seller)