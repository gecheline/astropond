import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'


import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic06 from '../assets/images/pic06.jpg'

import resumepdf from '../files/resume_akochoska.pdf'
import cvpdf from '../files/CV_Kochoska.pdf'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="astropond - Angela Kochoska"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        {/* <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Teaching</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                        
                        {/* <article style={{backgroundImage: `url(${pic02})`}}> */}
                        <article>
                            <header className="major">
                                <h3>Science / Research</h3>
                                <p>Eclipsing binaries and the little intricacies of their modeling.</p>
                            </header>
                            <Link to="/research" className="link primary"></Link>
                        </article>

                        {/* <article style={{backgroundImage: `url(${pic03})`}}> */}
                        <article>
                            <header className="major">
                                <h3>Art & graphic design</h3>
                                <p>Fun little (and big) projects I do in my free time.</p>
                            </header>
                            <Link to="/art" className="link primary"></Link>
                        </article>

                        {/* <article style={{backgroundImage: `url(${pic04})`}}> */}
                        <article>
                            <header className="major">
                                <h3>Web development</h3>
                                <p>Websites and web-hosted slide shows I have built from scratch.</p>
                            </header>
                            <Link to="/webdev" className="link primary"></Link>
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>About me</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                        {/* <article style={{backgroundImage: `url(${pic06})`}}> */}
                        <article>
                            <header className="major">
                                <h3>Blog</h3>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                    </section>
                    
                    <section id="aboutme">
                        <div className="inner">
                            <header className="major">
                                <h2>ABOUT ME</h2>
                            </header>
                            <p>I am a young scientist with 5+ years experience in research, coding and teaching. 
                                Highly skilled in data analysis with frequentist and Bayesian methods, data classification 
                                with machine learning and data visualization. I am versed in Python, both for code development
                                and data science, HTML, CSS, javascript, ReactJS, SQL, C++, C#.
                                I am passionate about teaching and advising and am particularly interested in boosting the
                                representation of underrepresented groups in STEM.
                                I have also recently rediscovered my love for art and creative projects, so you can see what
                                I've been up to in my free time as well!</p>
                            <ul className="actions">
                                <li><a href={resumepdf} className="button">R&Eacute;SUM&Eacute;</a></li>
                                <li><a href={cvpdf} className="button">CV (ACADEMIC)</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex