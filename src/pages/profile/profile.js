import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import { MyRecipe, LikedRecipe, SavedRecipe } from '../../components/profile/cardSect2';
import gStyle from '../../assets/css/general.module.css';
import profileImg from '../../assets/img/profile-img.png';
import bombChicken from '../../assets/img/bomb-chicken.png';
import axios from 'axios';
import "./style.css";


const Profile = () => {
    const [showMyRecipe, setShowMyRecipe] = useState(true);
    
    const [showSavedRecipe, setShowSavedRecipe] = useState(false);
    
    const [showLikedRecipe, setShowLikedRecipe] = useState(false);

    
    

    const data = JSON.parse(localStorage.getItem("data"));
    


    

    const onMyRecipe = () => { 
        setShowMyRecipe(true);
        setShowSavedRecipe(false);
        setShowLikedRecipe(false);
    }

    const onSavedRecipe = () => { 
        setShowSavedRecipe(true);
        setShowMyRecipe(false);
        setShowLikedRecipe(false);
    }

    const onLikedRecipe = () => { 
        setShowLikedRecipe(true);
        setShowMyRecipe(false);
        setShowSavedRecipe(false);
    }


    const sect1 = {
        height: "400px"
    }

    const pProfileSize = {
        // width: "172px",
        // height: "172px",
        width: "100%",
        height: "100%",

    }

    const buttonSize = {
        width: "100%",
        width: "100%",
        cursor: "pointer",
        borderRadius: "5px",
    }

    const line = {
        borderBottom: "3px #0000009c solid"
    }

    

    



    return (
        <Fragment>
            <Navbar />
            <SpaceEmpty />
            <SpaceEmpty />

            {/* sect1 */}
            <div className='w-100 d-flex flex-column justify-align-center align-items-center ' style={sect1}>
                <div className={`${gStyle['w-30']} d-flex flex-column justify-align-center align-items-center `}>
                    <div className={`borderRadius`}>
                        <img src={profileImg} alt="" style={pProfileSize} />
                    </div>

                    <div className={`${gStyle['w-30']}  text-end mb-2`}>
                        <button 
                            className={`${gStyle['bg-color-yellow']} btn-customize`}
                            data-bs-toggle="collapse" 
                            href="#collapseExample"
                            aria-expanded="false" 
                            aria-controls="collapseExample">   
                                <i className="w-100 bi bi-pencil"></i>
                        </button>
                    </div>
                    {/* collapse */}
                    <div 
                        id="collapseExample"
                        className='collapse'>
                        <div className=" mb-2" style={buttonSize}>
                            <input type="file" id="files" className="hidden" />
                            <label htmlFor="files" className={`airbnb-md ${gStyle['bg-color-yellow']} ${gStyle['airbnb-md']}`} style={buttonSize} >
                                Change Photo Profile
                            </label>
                        </div>
                        <div className={`mb-2 ${gStyle['bg-color-yellow']}`}style={buttonSize}>
                            <Link className='text-decoration-none text-dark'  to="/user/change_password"><p className={`${gStyle['airbnb-md']} `}>Change Password</p></Link>
                        </div>
                    </div>
                    {/* collapse */}

                    <div className={`  text-center `}>
                        <p className='h3'>
                            { data.name }
                        </p>
                    </div>

                    <div className={`${gStyle['w-70']}`}>
                        <div style={line}>

                        </div>
                    </div>


                </div>
            </div>
            {/* end of sect1 */}

            {/* sect2 */}
            <div className='mb-3 w-100'>
                <ul className={`d-flex flex-row list-unstyled gap-5 ms-3 ${gStyle['airbnb-bd']} h3`}>
                    <button 
                        className='btn-customize-nav'
                        onClick={onMyRecipe}
                        style={showMyRecipe ? {borderBottom: "3px solid black",background :"none"} : {}}>
                            MyRecipe
                    </button>
                    <button 
                        className='btn-customize-nav'
                        onClick={onSavedRecipe}
                        style={showSavedRecipe ? {borderBottom: "3px solid black",background :"none"} : {}}
                        >
                            Saved Recipe
                    </button>
                    <button 
                        className='btn-customize-nav' 
                        onClick={onLikedRecipe}
                        style={showLikedRecipe ? {borderBottom: "3px solid black",background :"none"} : {}}
                        >
                            Liked Recipe
                    </button>
                </ul>
            </div>
            <hr />
            {/* My Recipe */}
            { showMyRecipe ? <MyRecipe/> : null}
            {/* end of My Recipe */}

            {/* Saved Recipe */}
            { showSavedRecipe ? <SavedRecipe/> : null}
            
            {/* end of Saved Recipe */}
            
            {/* Liked Recipe */}
            { showLikedRecipe ? <LikedRecipe/> : null}
            {/* end of Liked Recipe */}
            
            {/* end of sect2 */}


            {/* footer */}
            <Footer />
            {/* footer */}

        </Fragment>
    )
}


export default Profile