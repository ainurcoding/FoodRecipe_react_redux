import React, { Fragment, useEffect, useState } from "react";
import { getRecipeById } from "../../redux/action/recipe";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import gStyle from '../../assets/css/general.module.css';
import './style.css';
import banner2 from '../../assets/img/banner2.png';
import user from '../../assets/img/Comment-person1.png';
import iconSave from '../../assets/img/Group 73.png';

const token = localStorage.getItem('token');
const DetailRecipe = () => {


    // for get action
    const dispatch = useDispatch();

    // for get reducer
    const recipe = useSelector((state) => {
        return state.recipe
    })
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        dispatch(getRecipeById(id, token));
        console.log(recipe)
        // console.log('data from id');
        // console.log(recipe.data.rows[0].ingredients)

    }, []);

    return (
        <Fragment>
            <Navbar />
            <SpaceEmpty />
            <article>
                <div className="article-title text-center">
                    {
                        recipe.isLoading ? (
                            <h1>Loading</h1>
                        ) : recipe.isError ? (
                            <h1>Error</h1>
                        ) : recipe.data.rows.map((item, index) => (
                            <p className="airbnb-bd">{item.title}</p>
                        ))

                    }

                </div>
                <div className="mb-5"></div>

                <div className='w-100 d-flex flex-column justify-align-center align-items-center'>
                    <div className='w-50 position-relative'>
                        {
                            recipe.isLoading ? (
                                <h1>Loading</h1>
                            ) : recipe.isError ? (
                                <h1>Error</h1>
                            ) :
                                recipe.data.rows.map((item, index) => (
                                    <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`} alt={item.title} style={{ width: "100%" }} />
                                ))

                        }


                        <div className={`${gStyle['top-90']} ${gStyle['start-80']}  position-absolute d-flex flex-row gap-2`}>
                            <img src={iconSave} alt="icon-save" className="iconSize" />
                            <p className={`iconSize ${gStyle['bg-color-yellow']} d-flex flex-column justify-align-center align-items-center`}><i style={{ width: "100%", height: "100%" }} className="bi bi-hand-thumbs-up"></i></p>
                        </div>
                    </div>
                </div>


                <div className="mb-5"></div>

                {/* ingredients */}
                <div className={`ingredients w-100 d-flex justify-content-center align-items-center  mb-5
        `}>
                    <div className={`${gStyle['w-56']}  d-flex flex-column`}>
                        <div>
                            <p className={`${gStyle['airbnb-md']} h3`}>Ingredients</p>
                        </div>
                        <ul className={`ps-4 ${gStyle['airbnb-lt']} h5`}>
                            {
                                recipe.isLoading ? (
                                    <h1>Loading</h1>
                                ) : recipe.isError ? (
                                    <h1>Error</h1>
                                ) :
                                    recipe.data.rows.map((item, index) => (
                                        <li>
                                            {item.ingredients}
                                        </li>
                                    ))

                            }

                        </ul>
                    </div>
                </div>
                {/* end of ingredients */}

                {/* video step */}
                <div className='mb-5 videoStep w-100 d-flex justify-content-center align-items-center '>
                    <div className={`${gStyle['w-56']} d-flex flex-column `}>
                        <div>
                            <p className={`${gStyle['airbnb-md']} h3 mb-3`}>Video Step</p>
                        </div>
                        <p className={`${gStyle['bg-color-yellow']} text-center d-flex justify-content-center align-items-center mb-2`} style={{ width: "200px", height: "50px", borderRadius: "3px" }} ><Link className='text-decoration-none text-white' to='/detail_video'><i className="bi-caret-right"></i></Link></p>
                        <p className={`${gStyle['bg-color-yellow']} text-center d-flex justify-content-center align-items-center mb-2`} style={{ width: "200px", height: "50px", borderRadius: "3px" }} ><Link className='text-decoration-none text-white' to='/detail_video'><i className="bi-caret-right"></i></Link></p>
                        <p className={`${gStyle['bg-color-yellow']} text-center d-flex justify-content-center align-items-center mb-2`} style={{ width: "200px", height: "50px", borderRadius: "3px" }} ><Link className='text-decoration-none text-white' to='/detail_video'><i className="bi-caret-right"></i></Link></p>
                        <p className={`${gStyle['bg-color-yellow']} text-center d-flex justify-content-center align-items-center mb-2`} style={{ width: "200px", height: "50px", borderRadius: "3px" }} ><Link className='text-decoration-none text-white' to='/detail_video'><i className="bi-caret-right"></i></Link></p>
                    </div>
                </div>
                {/* end of video step */}

                {/* comment */}
                <div className='mb-5 commentStep w-100 d-flex justify-content-center text-align-center  '>
                    <div className={`${gStyle['w-56']} d-flex flex-column `}>
                        <textarea className='textarea-detail-recipe mb-2' rows="10" cols="30" placeholder='Comment:'></textarea>
                        <div className='row w-100 gap-2'>
                            <div className={'col-2  whMaxContent'} >
                                <img src={user} alt="img-user" style={{ width: "64px", height: "64px" }} />
                            </div>
                            <div className='col-10 d-flex flex-column'>
                                <div >
                                    <p className={`${gStyle['airbnb-bd']} h6`} >Ayudia</p>
                                </div>
                                <div >
                                    <p className={`${gStyle['airbnb-lt']} h6`} >Nice Recipe, Simple and Delicious, Thank You</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* end of comment */}




            </article>
            {/* <!-- end of article section --> */}


            <SpaceEmpty />
            <Footer />
            {/* <p>this is detail recipe page</p> */}

        </Fragment>
    )
}

export default DetailRecipe