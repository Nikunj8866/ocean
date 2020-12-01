import React, { Component } from "react";
import { Link } from 'react-router-dom';

class AboutTwo extends Component{
    render(){
        let title = 'About',
        description = 'We are an Irish based film company based in Dublin Ireland. Founded by David Doyle we specialise in creative media. Our team have over 100 years of collective film experience.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about-banner.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">What we do</h3>
                                                <p>We look after your film project from the first draft of the script through to the final edit. Our core operating area is Ireland and the UK.</p>
                                            </div>
                                            <Link className="rn-button-style--2 mt-5" to="/about">Read More</Link>
                                        </div>
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutTwo;