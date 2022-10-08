import React, { useContext, useEffect } from "react";
import LandingNavBar from '../components/landingnavbar' 
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
    return (
        
        <div>
            <LandingNavBar/>
            <main>
            <div className="container">
                <div className="col-md-6 home">
                    <p className="big-title">Freelance in web3 done the best way</p>
                    <p className="normal-text">Find work opportunities through the Lens social media platform. Safe and secure for both parties.</p>
                    <div className="parent-button-container">
                        <div className="home-button-container">
                        <button className="GreenButton"> Launch app</button>
                        <a href="https://github.com"><button className="WhiteButton"> GitHub</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 home"></div>
                <div className="col-md-5 imghome">
                <svg className="landingimg"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/></svg>
                </div>
            </div>
        </main>

        </div>
        
    )
}