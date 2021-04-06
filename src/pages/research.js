import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic_cbs from '../assets/images/contact_q05_lp.gif'
import pic_tess from '../assets/images/tess_dash.gif'
import pic_kepler from '../assets/images/kepler_tsne.gif'
import poster from '../assets/images/poster.gif'
import pic08 from '../assets/images/pic10.jpg'

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
                <a href = 'https://aas237-aas.ipostersessions.com/?s=FF-87-4C-85-9F-68-8D-B0-3A-17-7A-8B-17-D5-48-10'>
                    <div className="image">
                        <img src={poster} alt="" />
                        </div>
                        </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Eclipsing binary modeling</h3>
                            </header>
                            <ul>
                                <li>Developed methods for quick estimates using analytical models of the 
                                    <a href='http://phoebe-project.org/docs/2.3/tutorials/LC_estimators'> light </a>
                                     and <a href='http://phoebe-project.org/docs/2.3/tutorials/RV_estimators'> radial velocity</a> curves</li>
                                <li>Introduced <a href='https://github.com/gecheline/phoetting/blob/master/grid_search/all_grid_fit.ipynb'>
                                    nearest-neighbor search from synthetic database</a> for fast parameter estimation</li>
                                <li>Introduced robust, <a href='https://github.com/gecheline/phoetting/tree/master/automated_fitting'>semi-automated fitting</a> based on PHOEBE</li>
                                <li>Tests and supports the implementation of optimizers and samplers in PHOEBE</li>
                            </ul>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic_kepler} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Data analysis and machine learning</h3>
                            </header>
                            <ul>
                                <li>Computed <a href='http://keplerebs.villanova.edu/tsne'>3D and 2D maps of the Kepler EB catalog</a> with t-SNE</li>
                                <li>Estimated the <a href='https://arxiv.org/pdf/1703.09362.pdf'>detectability of eclipsing binaries</a> with the Gaia satellite</li>
                                <li>(work in progress) Refinement of the orbital periods of TESS EBs</li>
                                <li>(work in progress) Classification, statistical analysis and visualization of the TESS EB catalog</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic_cbs} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Peanuts in space</h3>
                            </header>
                            <ul>
                                <li>Demonstrated that current approach of modeling contact binaries is insufficient</li>
                                <li>Introduced <a href='https://github.com/gecheline/stargrit'>STARGRIT</a>, 
                                a code for computing <a href='https://arxiv.org/abs/1804.08781'>radiative transfer in contact binaries</a></li>
                                <li>Support for contact binaries in PHOEBE</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </Layout>
)

export default Research