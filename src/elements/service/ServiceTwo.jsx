import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Corporate Video',
        description: 'A Corporate video is typically a short film that depicts your company and outlines...',
        url: '/corporate-video'
    },
    {
        icon: <FiLayers />,
        title: 'Social Media Video',
        description: 'We make Social Media Videos for your specific industry made to show across your...',
        url: '/social-media-video'
    },
    {
        icon: <FiUsers />,
        title: 'Influencer Video',
        description: 'If you are an influencer and you want to show case yourself, product or your social media..',
        url: '/influencer-video'
    },
    {
        icon: <FiMonitor />,
        title: 'Conference Video ',
        description: 'Do you want your conference video to reach out to an even bigger or wider audience with that...',
        url: '/conference-video'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'Our team have over 100 years of collective film experience.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <Link to="/service" className="btn-transparent rn-btn-dark"><span className="text">See All Services</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
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
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
