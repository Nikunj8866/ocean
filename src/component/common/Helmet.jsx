import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Ocean Pictures </title>
                    <meta name="description" content="Ocean Pictures – We are an Irish based film company based in Dublin Ireland. Founded by David Doyle we specialise in creative media. Our team have over 100 years of collective film experience." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
