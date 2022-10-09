import React, { useContext, useEffect } from "react";
import LandingNavBar from '../components/landingnavbar' 
import { useRouter } from 'next/router'
import Link from 'next/link'
import landingcss from '../styles/landing.css'


export default function Home() {
    return (
        
        <div>
            <LandingNavBar/>
            <section className="container landing-container">
                <div className="row">
                    <div className="col-md-6 home">
                        <p className="big-title">Freelance in web3 done the best way</p>
                        <p className="normal-text">Find work opportunities through the Lens social media platform. Safe and secure for both parties.</p>
                        <div className="parent-button-container">
                            <div className="home-button-container">
                            <Link href="/Feed" className="GreenButton">Launch app</Link>
                            <Link href="https://github.com"><button className="WhiteButton"> GitHub</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 home"></div>
                    <div className="col-md-5 imghome">
                        <img src="assets/img/landing-img.jpeg" className="landingimg" />
                    </div>
                </div>
            </section>
        </div>
        
    )
}