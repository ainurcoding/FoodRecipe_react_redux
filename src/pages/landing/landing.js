import React, { Fragment, useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import iconActive from '../../assets/img/user icon activ.png';
import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import gStyle from '../../assets/css/general.module.css';
import lpStyle from '../../assets/css/lp.module.css';
import banner2 from '../../assets/img/banner2.png';
import banner3 from '../../assets/img/banner3.png';
import banner4 from '../../assets/img/banner4.png';
import chickenKare from '../../assets/img/card1.png';
import axios from 'axios';


const Landing = () => {
    // inline style
    const styles = {
        height: "1210px"
    }

    const titleStyle = {
        width: "600px"
    }

    const bgInput = {
        backgroundColor: "#EFEFEF",
        border: "none ",
        height: "30px"
    }

    const iconInput = {
        backgroundColor: "#EFEFEF",
        border: "none ",
        borderRadius: "2.5px 0 0 2.5px ",
        height: "30px"
    }

    const formInput = {
        backgroundColor: "#EFEFEF",
        border: "none ",
        borderRadius: "0 2.5px 2.5px 0",
        height: "30px"
    }

    const leftRadius = {
        borderRadius: "0 0 0 2.5px ",
    }
    const rightRadius = {
        borderRadius: "0 2.5px 0 0 ",
    }

    const img1 = {
        objectFit: "contain"
    }

    const img2 = {
        width: "300px",
        height: "500px"
    }

    const sect2 = {
        height: "150px"
    }

    const borderYellow = {
        height: "483px",
        width: "58%"
    }
    const line = {
        height: "5px",
        backgroundColor: "#00000068"
    }

    const learnMoreBtn = {
        width: "200px",
        height: "34px",
        borderRadius: "2.5px",
        cursor: "pointer"
    }

    const sect3 = {
        height: "820px"
    }

    const img3 = {
        height: "800px",
        height: "800px"
    }

    const spaceEmpty = {
        height: "200px"
    }

    const sect4 = {
        height: "1200px"
    }

    const sect4Img = {
        height: "500px",
        with: "500px",
        overflow: "auto"
    }

    const wMaxContent = {
        width: "max-content",
        height: "max-content"
    }
    // inline style
    const URL = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();
    const [title, setTitle] = useState([]);
    const token = localStorage.getItem('token')

    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate(`/search?title=${title}`)
    }


    return (
        <Fragment>
            <Navbar />
            <div className='position-relative d-flex w-100' style={styles}>
                <div className={`h-100 col-9  d-flex align-items-center`} >
                    <div className={` gap-3 wrap d-flex flex-column ms-5`} style={titleStyle}>
                        <p className={`${gStyle['airbnb-bd']} ${gStyle['txt-color-blue']} display-4`}>Discover Recipe <br /> & Delicious Food</p>
                        <div className={`d-flex flex-row`} >
                            <div className={``} style={iconInput}>
                                <i className={`h-100 bi bi-search p-1`} ></i>
                            </div>
                            <form className='w-100' onSubmit={(e) => onSearchHandler(e)}>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="search Food, Restaurant"
                                        className={`w-75 ${lpStyle['form-input-custom']}`}
                                        style={formInput}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className={`h-100 col-3 ${gStyle['bg-color-yellow-nh']}`}>
                </div>

                <div className={`${lpStyle['img1-responsif']} position-absolute ${gStyle['start-60']} ${gStyle['top-30']}`} >
                    <img src={banner2} alt="Salad with Egg leaf Green" className={`mw-100 mh-100`} />
                </div>
            </div>


            <div className={`w-100 d-flex gap-3`} style={sect2}>
                <div className={`${lpStyle['yellow-stick']} ${gStyle['bg-color-yellow-nh']} ms-5`}>
                </div>
                <div className={`d-flex align-items-center`}>
                    <p className={`${gStyle['airbnb-md']} h2`}>Popular For You!</p>
                </div>
            </div>

            <div className='position-relative row  w-100' style={styles}>
                <div className={`col-6 h-100`}>
                    <div className={`h-100 d-flex flex-column justify-content-center align-items-center`}>
                        <div className={`${lpStyle['border-yellow']}`} style={borderYellow}>
                        </div>
                    </div>


                </div>
                <div className={`col-6 h-100 `}>
                    <div className={` w-100 h-100 d-flex flex-column justify-content-center align-items-center `}>
                        <div className={`w-50 `}>
                            <div className={`w-100  ${gStyle['airbnb-md']} h2 mb-2`}>
                                <p>Healty Bone Broth<br />Ramen (Quick & Easy)</p>
                            </div>
                            <div className='w-50 mb-2' style={line}>

                            </div>
                            <div className={`mb-2 ${gStyle['airbnb-lt']} fs-6 mb-3`}>
                                <p>Quick + Easy Chicken Bone Broth RamenHealthy chicken ramen in a hurry? That's right!</p>
                            </div>
                            <div className={``}>
                                <p className={`${gStyle['bg-color-yellow']}`} style={learnMoreBtn}><Link className={`w-100 text-decoration-none text-white p-5`} to="/user/detail_recipe">Learn More</Link></p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={`${lpStyle['img1-responsif']} position-absolute ${gStyle['start-10']} ${gStyle['top-30']}`} style={wMaxContent}>
                    <img src={banner3} alt="Sala d with Egg leaf Green" className={`mw-100 mh-100`} />
                </div>
            </div>

            <div className={`w-100 d-flex gap-3`} style={sect2}>
                <div className={`${lpStyle['yellow-stick']} ${gStyle['bg-color-yellow-nh']} ms-5`}>
                </div>
                <div className={`d-flex align-items-center`}>
                    <p className={`${gStyle['airbnb-md']} h2`}>New Recipe</p>
                </div>
            </div>


            <div className={`position-relative row w-100 mt-5`} style={sect3}>
                <div className={`col-6 `} >
                    <div className={`${gStyle['w-80']} h-100  ${gStyle['bg-color-yellow-nh']}`}>

                    </div>
                </div>
                <div className={`col-6`}>
                    <div className={` w-100 h-100 d-flex flex-column justify-content-center align-items-center `}>
                        <div className={`w-50 `}>
                            <div className={`w-100  ${gStyle['airbnb-md']} h2 mb-2`}>
                                <p>Healty Bone Broth<br />Ramen (Quick & Easy)</p>
                            </div>
                            <div className='w-50 mb-2' style={line}>

                            </div>
                            <div className={`mb-2 ${gStyle['airbnb-lt']} fs-6 mb-3`}>
                                <p>Quick + Easy Chicken Bone Broth RamenHealthy chicken ramen in a hurry? That's right!</p>
                            </div>
                            <div className={``}>
                                <p className={`${gStyle['bg-color-yellow']}`} style={learnMoreBtn}><Link className={`w-100 text-decoration-none text-white p-5`} to="/user/detail_recipe">Learn More</Link></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`position-absolute ${gStyle['start-5']} ${gStyle['top-10']}`} style={wMaxContent}>
                    <img src={banner4} alt="Burgen with Fresh Onion " style={img3} />
                </div>
            </div>

            <div style={spaceEmpty}>

            </div>
            <div className={`w-100 d-flex gap-3`} style={sect2}>
                <div className={`${lpStyle['yellow-stick']} ${gStyle['bg-color-yellow-nh']} ms-5`}>
                </div>
                <div className={`d-flex align-items-center`}>
                    <p className={`${gStyle['airbnb-md']} h2`}>Popular Recipe</p>
                </div>
            </div>

            <div className={` w-100 d-flex flex-column justify-content-center align-items-center overflow-auto`} style={sect4}>
                <div className={`row ${gStyle['h-90']} ${gStyle['w-90']} `}>
                    <div className={`col-4 `} style={sect4Img}>
                        <div className={`position-relative d-flex`}>
                            <img src={chickenKare} alt="Chicken Kare" className={`mw-100 mh-100`} />
                            <div className={`  ${gStyle['h-20']} w-50 position-absolute ${gStyle['airbnb-md']} ${gStyle['top-70']} h3 p-3 overflow-hidden`}>Chicken Kare</div>
                        </div>
                    </div>

                    <div className={`col-4 `} style={sect4Img}>
                        <div className={`position-relative d-flex`}>
                            <img src={chickenKare} alt="Chicken Kare" className={`mw-100 mh-100`} />
                            <div className={`  ${gStyle['h-20']} w-50 position-absolute ${gStyle['airbnb-md']} ${gStyle['top-70']} h3 p-3 overflow-hidden`}>Chicken kare</div>
                        </div>
                    </div>

                    <div className={`col-4 `} style={sect4Img}>
                        <div className={`position-relative d-flex`}>
                            <img src={chickenKare} alt="Chicken Kare" className={`mw-100 mh-100`} />
                            <div className={`  ${gStyle['h-20']} w-50 position-absolute ${gStyle['airbnb-md']} ${gStyle['top-70']} h3 p-3 overflow-hidden`}>Chicken kare</div>
                        </div>
                    </div>

                    <div className={`col-4 `} style={sect4Img}>
                        <div className={`position-relative d-flex`}>
                            <img src={chickenKare} alt="Chicken Kare" className={`mw-100 mh-100`} />
                            <div className={`  ${gStyle['h-20']} w-50 position-absolute ${gStyle['airbnb-md']} ${gStyle['top-70']} h3 p-3 overflow-hidden`}>Chicken kare</div>
                        </div>
                    </div>

                    <div className={`col-4 `} style={sect4Img}>
                        <div className={`position-relative d-flex`}>
                            <img src={chickenKare} alt="Chicken Kare" className={`mw-100 mh-100`} />
                            <div className={`  ${gStyle['h-20']} w-50 position-absolute ${gStyle['airbnb-md']} ${gStyle['top-70']} h3 p-3 overflow-hidden`}>Chicken kare</div>
                        </div>
                    </div>

                    <div className={`col-4 `} style={sect4Img}>
                        <div className={`position-relative d-flex`}>
                            <img src={chickenKare} alt="Chicken Kare" className={`mw-100 mh-100`} />
                            <div className={`  ${gStyle['h-20']} w-50 position-absolute ${gStyle['airbnb-md']} ${gStyle['top-70']} h3 p-3 overflow-hidden`}>Chicken kare</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Landing;