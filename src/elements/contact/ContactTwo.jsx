import React, { Component } from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

export default function ContactTwo() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        const params  = { 
            'name' : data.yourname,
            'email' : data.email,
            'subject' : data.subject,
            'message' : data.message
        }
        emailjs.send('service_ia1tihk', 'template_6f5v8fu', params, 'user_1e4XCurtrdGAI9Einw5Ad')
        .then((result) => {
            alert('Success!!!We will get back to you.');
        }, (error) => {
            alert('Something went wrong. Please try again letter.');
        });
    }
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                                    <label htmlFor="yourname">
                                        <input
                                            type="text"
                                            name="yourname"
                                            id="yourname"
                                            placeholder="Your Name *"
                                            ref={register({
                                                required: "Please enter value",
                                              })}
                                        />
                                    {errors.yourname && errors.yourname.message}
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Your email *"
                                            ref={register({
                                                required: "Please enter value",
                                                pattern: {
                                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                  message: "Please enter valid value"
                                                }
                                              })}
                                        />
                                        {errors.email && errors.email.message}
                                    </label>

                                    <label htmlFor="subject">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            placeholder="Write a Subject"
                                            ref={register}
                                        />
                                    </label>
                                    <label htmlFor="message">
                                        <textarea
                                            type="message"
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            ref={register}
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/contact-us.png" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}