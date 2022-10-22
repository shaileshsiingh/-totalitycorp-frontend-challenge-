import React from 'react';
import "./home.css";
import iphone14 from '../../assets/home/iphone-14-pro.jpg'
import iphone14pro1 from '../../assets/home/iphone-14.jpg'
import ipadprolarge from '../../assets/home/hero-ipad.jpg'
import promo_bts_large from '../../assets/home/apple-watch-ultra.jpg'
import promo_bts_medium from '../../assets/home/apple-watch-ultra.jpg'
import promo_watch_series_6_lte__f8lrasjnry2y_small from '../../assets/home/apple-watch.jpg'
import promo_watch_series_large from '../../assets/home/apple-watch.jpg'
import promo_watch_series_medium from '../../assets/home/apple-watch.jpg'
import promo_bts__bg3cb4kaoqoi_small from '../../assets/home/apple-watch-ultra.jpg'
import airpod from '../../assets/home/air-pod.jpg'
import applecard from '../../assets/home/apple-card.jpg'

import promo_spatial_audio_billie_eilish_large from '../../assets/home/promo_spatial_audio_billie_eilish_large.jpg'
import promo_spatial_audio_billie_eilish_medium from '../../assets/home/promo_spatial_audio_billie_eilish__ltg83lkpcqq2_medium.jpg'
import promo_spatial_audio_billie_eilish_small from '../../assets/home/promo_spatial_audio_billie_eilish__ltg83lkpcqq2_small.jpg'

import promo_coda_large from'../../assets/home/promo_coda_large.jpg'
import promo_coda_medium from'../../assets/home/promo_coda__b4z92qy59piq_medium.jpg'
import promo_coda_small from'../../assets/home/promo_coda__b4z92qy59piq_small_2x.jpg'

import musiclogo from'../../assets/home/logo__dcojfwkzna2q_large.png'
import codalogo from'../../assets/home/promo_logo_coda__ehxr8quza402_large.png'
import sundancelogo from'../../assets/home/promo_logo_awards_coda__gnr9ahsp1nmi_large.png'
import tvpluslogo from'../../assets/home/logo_light__cfvl40z2nzau_large.png'

function Home(){
    return(
        <div>
            {/* section-1 */}
            <section className="hs-part1">
               
                
                <div className="main1">
                    <div className="div1">
                        <h2>iPhone 14 Pro</h2>
                    </div>
                    <div className="div2">
                        <h3>Pro.Beyond.</h3>
                    </div>
                    
                    <div className="div4">
                        <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>
                <div className="div5">
                        <img src={iphone14} alt="" />
                </div>
                <div className="div6">
                    <img src={iphone14} alt="" />
                </div>
            </section>
            
            {/* section2 */}
            <section className='hs-part2'>

                <div className="main1">
                    <div className="div1">
                        <h2>iPhone 14 </h2>
                    </div>
                    <div className="div2">
                        <h3>Big and Bigger.</h3>
                    </div>
                    <div className="div4">
                        <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>

                <div className="div5">
                    <img src={iphone14pro1} alt="" />
                </div>

                <div className="div6">
                    <img src={iphone14pro1} alt="" />
                </div>

            </section>

            {/* SECTIN 3 */}
            <section className="hs-part3">

                <div className="main1">
                    <div className="div1">
                        <h2>iPad </h2>
                    </div>
                    <div className="div2">
                        <h3>Lovable.Drawable.Magical</h3>
                    </div>
                    <div className="div4">
                        <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                        <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                    </div>
                </div>
                <div className="div5">
                    <img src={ipadprolarge} alt="" />
                </div>
                <div className="div6">
                    <img src={ipadprolarge} alt="" />
                </div>

            </section>

            {/* SECTION 4 */}
            <section className="hs-part4">

                <div className="main1">

                    <div className="div1">
                        <img src={promo_bts_large} alt="" />
                    </div>

                    <div className="div2">
                        <img src={promo_bts_medium} alt="" />
                    </div>

                    <div className="div4">
                        <img src={promo_bts__bg3cb4kaoqoi_small} alt="" />
                    </div>

                    <div className="div3">
                        <div className="sub1">
                            <h4>Watch</h4>
                        </div>
                        <div className="sub2">
                            <a  href="# ">Adventure Awaits</a>
                        </div>
                        <div className="sub3">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>

                </div>

                <div className="main2">

                    <div className="div1">
                        <img src={promo_watch_series_large} alt="" />
                    </div>

                    <div className="div2">
                        <img src={promo_watch_series_medium} alt="" />
                    </div>

                    <div className="div4">
                        <img src={promo_watch_series_6_lte__f8lrasjnry2y_small} alt="" />
                    </div>

                    <div className="div3">
                    <div className="sub1">
                            <h1>Watch</h1>
                        </div>
                        
                        
                        <div className="sub2">
                            <h5>A healthy leap ahead.</h5>
                        </div>
                        <div className="sub3">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>

                </div>

            </section>

            {/* SECTION 5 */}
            <section className="hs-part5 hs-part4">

                <div className="main1">
                
                    <div className="div1">
                        <img src={airpod} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={airpod} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={airpod} alt="" />
                    </div>
                
                    <div className="div3">
                        <div className="sub1">
                            <h4>AirPods Pro</h4>
                        </div>
                        <div className="say">
                            <h5>Rebuild from the sound up.</h5>
                        </div>
                        <div className="sub2">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                
                </div>
                
                <div className="main2">
                
                    <div className="div1">
                        <img src={applecard} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={applecard} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={applecard} alt="" />
                    </div>
                
                    <div className="div3 airtag">
                        <div className="sub1">
                            <h4>Card</h4>
                        </div>
                        <div className="sub2 lose">
                            <h5>Get upto 3% cshback with every purchase.</h5>
                        </div>
                        <div className="sub3">
                            <a  href="# ">Learn more<i uk-icon="chevron-right"></i></a>
                            <a className="a1" href="# "> Buy<i uk-icon="chevron-right"></i></a>
                        </div>
                    </div>
                
                </div>

            </section>


            {/* SECTION 6 */}
            <section className="hs-part6 hs-part5 hs-part4">

                <div className="main1">
                
                    <div className="div1">
                        <img src={promo_spatial_audio_billie_eilish_large} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={promo_spatial_audio_billie_eilish_medium} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={promo_spatial_audio_billie_eilish_small} alt="" />
                    </div>
                
                    <div className="div3">
                        <div className="sub1">
                            <img src={musiclogo} alt="" />
                        </div>
                        <div className="sub2">
                            <h5>Introducing Spatial Audio<br/>with Dolby Atoms.</h5>
                        </div>
                        <div className="sub3 ln">
                            <a  href="# ">Listen now<sup>2</sup></a>
                        </div>
                    </div>
                
                </div>
                
                <div className="main2">
                
                    <div className="div1">
                        <img src={promo_coda_large} alt="" />
                    </div>
                
                    <div className="div2">
                        <img src={promo_coda_medium} alt="" />
                    </div>
                
                    <div className="div4">
                        <img src={promo_coda_small} alt="" />
                    </div>
                
                    <div className="div3 airtag">
                        <div className="sub1">
                            <img src={tvpluslogo} alt="" />
                        </div>
                    </div>

                    <div className="div3 coda">
                        <div className="sub1">
                            <img src={sundancelogo} alt="" />
                        </div>
                        <div className="sub1">
                            <img src={codalogo} alt="" />
                        </div>
                        <div className="sub2 lose">
                            <h5>Every family has its own language.</h5>
                        </div>
                        <div className="sub3">
                            <a href="# ">Stream now <i uk-icon="play-circle"></i></a>
                        </div>
                    </div>
                
                </div>

            </section>
            
        </div>
    );
}

export default Home;