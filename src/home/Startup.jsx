import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import AboutTwo from "../component/HomeLayout/homeOne/AboutTwo";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";
import Video from "../elements/Video";
import ModalVideo from 'react-modal-video';

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'banner-1',
        category: '',
        title: 'Creative Ideas',
        description: 'Bringing Creative Ideas To Life',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'banner-2',
        category: '',
        title: 'We specialise',
        description: 'in making innovative and class leading films.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    } 
]


class Startup extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal (id) {
        this.setState({isOpen: {
            [id] : true
        } 
        })
    }
    render(){
        const PostList = BlogContent.slice(0 , 2);
        return(
            <Fragment> 
                <Helmet pageTitle="Startup" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation slider-startup">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><Link className="rn-button-style--2 btn-primary-color" to={`${value.buttonLink}`}>{value.buttonText}</Link></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 // End Single Slider 
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area ptb--120">
                    <AboutTwo />
                </div>
                {/* End About Area */}

                <div className="service-area ptb--75  bg_image bg_image--3">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>

                {/* Start Portfolio Area */}
                {/* <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55">
                        <Portfolio />
                    </div>
                </div> */}
                {/* End Portfolio Area */}

                {/* Start Video Area  */}
                <div className="rn-section ptb--120 bg_color--1">
                        <div className="container">
                             <div className="row sercice-details-content align-items-center">
                                <div className="col-lg-6">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/showreel/showreel1.png" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen[1]} videoId='jLelMWq8tc8' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center theme-color" onClick={this.openModal.bind(this,1)}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/showreel/showreel2.png" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen[2]} videoId='VMbxfbi6Eag' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center black-color" onClick={this.openModal.bind(this,2)}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500 mb--10">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                {/* <div className="rn-testimonial-area ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div> */}
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                {/* <div className="rn-blog-area pt--120 bg_color--1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-12">
                                <div className="section-title text-left">
                                    <h2>Latest News</h2>
                                    <p>Ocean Pictures launches into Irish Market space. .Ocean Pictures is pleased to enter the film/ video industry market within Ireland. We are a new innovate and creative film company specialising in Video / TV Production, Aerial Footage, Social media ads / Promos. Corporate videos . Event / Conference Coverage. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">View All News</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div> */}
                {/* End Blog Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> 
                {/* End Brand Area*/}
                
                 {/* Start Back To Top */}
                 <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </Fragment>
        )
    }
}
export default Startup;