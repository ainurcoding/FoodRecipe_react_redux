import gStyle from '../../assets/css/general.module.css'
import banner1 from '../../assets/img/banner1.jpg';
import bombChicken from '../../assets/img/bomb-chicken.png';
import bananasPancake from '../../assets/img/bananas-pancake.png';
import "./style.css";

import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ListRecipe, deleteRecipe } from '../../redux/action/recipe';

const MyRecipe = () => {

    const card = {
        width: "394px",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }

    // const [results, setResults] = useState()

    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    // for get action
    const dispatch = useDispatch();

    // useSelector for get reducer
    const {recipes, isLoading, isError} =  useSelector((state) => {
        return state.recipe
    })

    useEffect(() => {
        const loadData = async () => {
            await dispatch(ListRecipe());
            console.log(recipes)
            console.log(isLoading)
            console.log(isError)
           
        }
        loadData();
    }, [])
    
    const onDelete = (id) => {
        // console.log(id);
        // console.log(token);
        deleteRecipe(id,token)
            .then((res) => {
                
                console.log(res);
                alert('data has been deleted');
                return navigate('/landing');
            })
            .catch((err) => {
                console.log(err)
            })
    }




    return (
        <Fragment>

            <div className={`d-flex flex-row gap-3 mb-3`}>


                <div className={`row overflow-auto`} style={wrapCard}>
                    {
                        isLoading ? (
                            <h1>Loading</h1>
                        ) : (
                            isError ? (
                                <h1>Error</h1>
                            ) : (
                                recipes.rows.map((item, index) => (
                                    <div key={index} className='col-4 ms-4 position-relative cardSize' style={card}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`} alt={item.title} className='imgSize mb-3' />
                                <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>{item.title}</p>
                                <button
                                    className='bg-red'
                                    onClick={(e) => onDelete(item.id, e)}>
                                    delete
                                </button>||
                                <Link to={`/update/${item.id}`}
                                ><button
                                    className={`${gStyle['bg-color-yellow']}`}
                                >
                                        update</button></Link>||
                                <Link to={`/detail_recipe/${item.id}`}
                                ><button
                                    className={`${gStyle['bg-color-greenlt']}`}
                                >
                                        detail</button></Link>

                            </div>
                                    )
                                )
                            )
                        )
                    }
         
                    {/* {
                        recipe.data.rows.map((item, index) => (
                            <div key={index} className='col-4 ms-4 position-relative cardSize' style={card}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`} alt={item.title} className='imgSize mb-3' />
                                <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>{item.title}</p>
                                <button
                                    className='bg-red'
                                    onClick={(e) => onDelete(item.id, e)}>
                                    delete
                                </button>||
                                <Link to={`/update/${item.id}`}
                                ><button
                                    className={`${gStyle['bg-color-yellow']}`}
                                >
                                        update</button></Link>||
                                <Link to={`/detail_recipe/${item.id}`}
                                ><button
                                    className={`${gStyle['bg-color-greenlt']}`}
                                >
                                        detail</button></Link>

                            </div>
                        ))
                    } */}

                </div>

            </div>
        </Fragment>
    )
}

const LikedRecipe = () => {
    const card = {
        width: "max-content",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }
    return (
        <Fragment>
            <div className={`d-flex flex-row gap-3 mb-3`}>

                <div className={`row overflow-auto`} style={wrapCard}>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

const SavedRecipe = () => {
    const card = {
        width: "max-content",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }
    return (
        <Fragment>
            <div className={`d-flex flex-row gap-3 mb-3`}>

                <div className={`row overflow-auto`} style={wrapCard}>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={banner1} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bombChicken} alt="bomb-chicken" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bomb Chicken</p>
                    </div>
                    <div className='col-4 ms-4 position-relative cardSize' style={card}>
                        <img src={bananasPancake} alt="bananas-pancake" className='imgSize' />
                        <p className={`position-absolute text-white ${gStyle['airbnb-md']} ${gStyle['top-60']} h2 ms-2`}>Bananas Pancake</p>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export { MyRecipe, LikedRecipe, SavedRecipe };