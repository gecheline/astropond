import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Art = (props) => (
    <Layout>
        <Helmet>
            <title>Art & graphic design</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        {/* <BannerLanding /> */}

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Art & graphic design</h2>
                    </header>
                    <p>
                        I've been into drawing ever since I can remember, but that part of me had taken the back seat for a long time. 
                        Luckily, I am married to a musician who needed someone to do his release artworks and
                        that ressurected my passion for everything art and graphic design. Now I'm his unofficial
                        (and unpaid!) art and creative director, in charge of designing his website and any art that
                        accompanies his releases. You can see all of that on his website linked below!
                        </p>
                    <p>
                        A dear friend also convinced me to join him on a "draw something every day" challenge 
                        at the start of 2021, so making art has been a part of my daily routine 
                        since January 1st 2021. (It's not always good, but I learn something new every day!)
                        I post highlights from this adventure on my art Instagram page.
                    </p>
                    <ul className="actions">
                    <li><Link to="http://flipofficial.com" className="button">Fl!p official website</Link></li>
                    <li><Link to="https://www.instagram.com/geche.art/" className="button">My art instagram</Link></li>
                </ul>
                </div>

                {/* <Gallery /> */}




                
            </section>
        </div>

    </Layout>
)

export default Art