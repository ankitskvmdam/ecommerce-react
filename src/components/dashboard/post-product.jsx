import React from 'react'
import { withRouter } from 'react-router-dom'
import { 
    Typography,
    Box,
    Container,
    FormControl,
    InputLabel,
    Input,
    Button,
    Fab,
    Snackbar
} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert';

import { createProduct } from '../../common/script/api'

import axios from 'axios'
import { MdKeyboardArrowRight } from 'react-icons/md'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const successMsg = "Product posted successfully"
const errMsg = "Something went wrong"

class PostProduct extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            disableNext: false,
            open: false,
            severity: 'success',
            msg: successMsg
        }

        this.checkInput = this.checkInput.bind(this)
        this.submit = this.submit.bind(this)
        this.handleClose = this.handleClose.bind(this)

    }

    handleClose(){
        this.setState({open: false})
    }

    submit(){
        const form  = document.getElementById('create-product')
        const tag = form['tag'].value
        const title = form['title'].value
        const price = form['price'].value
        const description = form['description'].value
        const file = form['image'].files[0]

        let body = new FormData()

        body.append('tag', tag)
        body.append('title', title)
        body.append('price', price)
        body.append('description', description)
        body.append('image', file)
        body.append('user_id', localStorage.getItem('USER'))

        axios.post(createProduct, body, {
            cancelToken: this._source.token,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(data=>{
            if(data.status == 200){
                this.setState({
                    msg: successMsg,
                    severity: 'success',
                    open: true,
                    disableNext: false
                })

                setTimeout(()=>{
                    this.props.history.push('/')
                }, 5000)
            }

            else{
                this.setState({
                    msg: errMsg,
                    severity: 'error',
                    open: true,
                    disableNext: false
                })
            }
        })
        .catch((err) =>{
            console.log('error occurred', err)
            this.setState({
                msg: errMsg,
                severity: 'error',
                open: true
            })

            this.setState({disableNext: false})
        })

    }

    checkInput(){
        const form  = document.getElementById('create-product')
        const tag = form['tag'].value
        const title = form['title'].value
        const price = form['price'].value
        const description = form['description'].value
        const file = form['image']


        if(tag.length != 0 && title.length != 0 && price.length != 0 && description.length != 0 && file.files[0]){
            this.setState({disableNext: false})
        }

        else{
            this.setState({disableNext: true})
        }
    }

    componentDidMount(){
        this._source = axios.CancelToken.source()
    }

    componentWillUnmount(){
        this._source.cancel()
    }

    render(){
        const { open, msg, severity } = this.state

        return(
            <Container maxWidth='lg'>
                <Box display="flex" justifyContent='center' alignItems='center' mt={2}>
                    <form id='create-product'>
                        <Typography variant="h3" gutterBottom>
                            Create Product
                        </Typography>
                        <FormControl fullWidth={true} margin='normal'>
                            <InputLabel htmlFor="tag" color="secondary">Category</InputLabel>
                            <Input id="tag" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                        </FormControl>
                        <FormControl fullWidth={true} margin='normal'>
                            <InputLabel htmlFor="title" color="secondary">Name</InputLabel>
                            <Input id="title" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                        </FormControl>
                        <FormControl fullWidth={true} margin='normal'>
                            <InputLabel htmlFor="price" color="secondary">Price</InputLabel>
                            <Input id="price" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                        </FormControl>
                        <FormControl fullWidth={true} margin='normal'>
                            <InputLabel htmlFor="description" color="secondary">Description</InputLabel>
                            <Input id="description" color="secondary" fullWidth={true} required onChange={this.checkInput}/>
                        </FormControl>
                        <FormControl fullWidth={true} margin='normal'>
                        <Button variant="outlined">
                            Upload Image &nbsp;&nbsp;&nbsp;
                            <input type="file" accept="image/*" id="image" onChange={this.checkInput} />
                        </Button>
                    </FormControl>
                    <Box mt={2} display="flex" justifyContent='space-around' flex="1" alignItems="flex-end">
                        <Fab color='secondary' arial-label='next' size='medium' disabled={this.state.disableNext} onClick={this.submit}>
                            <MdKeyboardArrowRight className='next-icon' />
                        </Fab>
                    </Box>
                    </form>

                    <Snackbar open={open} autoHideDuration={10000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={severity}>
                            {msg}
                        </Alert>
                    </Snackbar>
                </Box>
            </Container>
        )
    }
}

export default withRouter(PostProduct)