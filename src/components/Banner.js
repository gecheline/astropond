import React from 'react';
import styled from 'styled-components';
import mypic from '../assets/images/profilepic.png';

const Styles = styled.div`

.myLanding {
    display: flex;
    flex-direction: row;
}

.myInfo {
    width: 70vw;
}
.myPhoto{
    width: 30vw;
}
.myPhoto img {
    width: 100%;
    height: auto;
}

`
const Banner = (props) => (
    // 
    <section id="banner" className="major">
        {/* <div className='myInfo'> */}
        <div className="inner">
                <Styles>
                    <div className='myLanding'>
                    <div className='myInfo'>
                    <header className="major">
                        <h1>Angela Kochoska</h1>
                    </header>

                    <div className="content">
                        <p>Astrophysicist. Data science enthusiast. Web dev and design newbie.</p>
                    </div>
                    </div>
                    <div className='myPhoto'>
                    <img src={mypic}></img>
                    </div>
                    </div>
                </Styles>
            </div>


        {/* </div> */}
    </section>

)

export default Banner
