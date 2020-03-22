import React from 'react'
import Pages from './pages.jsx'
import Header from './header'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container main-background">
                <Header />
                <Pages />
            </div>
        )
    }
}

export default Home