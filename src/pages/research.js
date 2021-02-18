import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Research = (props) => (
    <Layout>
        <Helmet>
            <title>Science / Research</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        {/* <BannerLanding /> */}

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Research</h2>
                    </header>
                    <p>My primary research interests are in the field of binary stars and their modeling for accurate and precise determination of fundamental stellar parameters, like masses, radii and luminosities. 
                        We use the insights gained through these studies to characterize interesting systems in our Galaxy, but also to advance the understanding of stellar propertis and evolution overall.
                        Of particular interest to me lately is developing methods for efficient and automated analysis of the unprecedented amounts of data we have acquired (and will continue to acquire) with missions like Kepler, TESS, Gaia, OGLE, ASAS-SN and the Vera Rubin Observatory.
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic08} alt="" />
                        </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Eclipsing binary modeling</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic09} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Classification with unsupervised learning</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic10} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>PHOEBE</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic10} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Peanuts in space</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Research