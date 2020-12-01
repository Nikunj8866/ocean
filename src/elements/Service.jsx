import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Corporate Video ',
        description: 'A Corporate video is typically a short film that depicts your company and outlines your services and your nature of business.',
        url: '/corporate-video'
    },
    {
        icon: <FiLayers />,
        title: 'Social Media Video',
        description: 'We make Social Media Videos for your specific industry made to show across your social media platforms.',
        url: '/social-media-video'
    },
    {
        icon: <FiUsers />,
        title: 'Influencer Video ',
        description: 'If you are an influencer and you want to show case yourself, product or your social media page we will build your tailor made Influencer Video from the start to the final edit.',
        url: '/influencer-video'
    },
    {
        icon: <FiMonitor />,
        title: 'Conference Video',
        description: 'Do you want your conference video to reach out to an even bigger or wider audience with that little touch of class.',
        url: '/conference-video'
    },
    {
        icon: <FiCast />,
        title: 'Aerial Video',
        description: 'We have our own drone pilot who can capture innovate and imaginative Aerial Video from the air.',
        url: '/aerial-video'
    },
    {
        icon: <FiMonitor />,
        title: 'Film Production',
        description: 'We make imaginative cinematic content via our Film Production service.',
        url: '/film-production'
    },
    {
        icon: <FiMonitor />,
        title: 'Green Screen',
        description: 'Our Green Screen studio is available to shoot any film requirements you may have.',
        url: '/green-screen' 
    },
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Services' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Services'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>See all Services</h2>
                                    <p>We are an Irish based film company based in Dublin Ireland. Founded by David Doyle we <br /> specialise in creative media.  Our team have over 100 years of collective film experience.</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <Link to={val.url}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;