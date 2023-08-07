import React from 'react';
import heroImg from '../../Assets/Images/nx_wave_hero.png';
import wavesBg from '../../Assets/Videos/assetVid.webm';

const Home = () => {
    return (
        <>
            <video className="background-video" autoPlay loop muted>
                <source src={wavesBg} type="video/webm" />
            </video>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <div className="hero-container">
                        <div className="hero-div">
                            <span className='headline-span'>
                                <strong className='bold'>NX Wave.</strong>
                                The next-gen credit card for those who love rewards
                            </span>
                            <div className='cashback-div'>
                                <span className="cashback-text">1% Cashback
                                </span><span className="cashback-text">5x Rewards</span><span className="cashback-text">Zero Forex Markup</span>
                            </div>
                            <div className='hero-form-button-div'>
                                <div className='form-input-container'>
                                    <input type='text'></input>
                                    <button className='apply-now'>Apply Now</button>
                                </div>
                                <div className='checkbox-span'>
                                    <input type='checkbox' id='subscribe' className='checkbox-input' />
                                    <span>You agree to be contacted by UniCards</span>
                                </div>
                            </div>
                        </div>
                        <img src={heroImg} className="hero-img" alt="Hero" />

                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
