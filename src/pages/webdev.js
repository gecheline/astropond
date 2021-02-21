import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const WebDev = (props) => (
    <Layout>
        <Helmet>
            <title>Web development</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        {/* <BannerLanding /> */}

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Web development</h2>
                    </header>
                    <p>
                        Web development is where my loves for coding and design converge! 
                        I am relatively new to it, but I have several completed projects that I have built from scratch, frontend and backend,
                        following YouTube tutorials and courses on HTML, CSS, Javascript and React.js. 
                        </p>
                        <ul className="alt">
                            <li><a href='http://flipofficial.com' target="_blank" rel="noopener noreferrer" style={{color: '#ff79cf'}}>
                                Fl!p Official Website</a> 
                            - an '80s themed website for Fl!p (musician and also, my husband) with a built-in "vintage radio" 
                            React component that can play all of his releases directly in the website.</li>
                            <li><a href='/' target="_blank" rel="noopener noreferrer" style={{color: '#ff79cf'}}>
                                Astropond - current website</a> - built on top of the Forty V2 Gatsby.js template, 
                            using Gatsby/React.js and GraphQL</li>
                            <li><a href='https://gecheline.github.io/wedding-website' target="_blank" rel="noopener noreferrer" style={{color: '#ff79cf'}}>
                                My wedding website</a> - a simple, geeky, Doctor Who themed 
                            website for my wedding (pure HTML/CSS/Javascript)</li>
                            <li>Timed web slideshows for 
                                <a href='https://gecheline.github.io/bhm' target="_blank" rel="noopener noreferrer" style={{color: '#ff79cf'}}> Black History Month </a> 
                                and <a href='https://gecheline.github.io/whm2020' target="_blank" rel="noopener noreferrer" style={{color: '#ff79cf'}}> Women History Month </a> 
                                celebrating black and women pioneers in astronomy and astrophysics.
                            These are displayed on my department's dashboard every February and March.</li>
                        </ul>
                    
                </div>
            </section>
            
        </div>

    </Layout>
)

export default WebDev