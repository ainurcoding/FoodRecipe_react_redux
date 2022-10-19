import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, SpaceEmpty, Footer } from '../../components/main/Main';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteRecipe, searchByTitle } from '../../redux/action/recipe';
import gStyle from '../../assets/css/general.module.css';

const SearchRecipe = () => {
    const card = {
        width: "394px",
        height: "300px",
    }

    const wrapCard = {
        height: "700px",

    }

    const URL = process.env.REACT_APP_BACKEND_URL;
    const [queryParams] = useSearchParams();
    const titleSearch = queryParams.get('title');

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const recipe = useSelector((state) => {
        return state.recipe
    })
    console.log(queryParams.get('title'))




    useEffect(() => {
        if (titleSearch) {
            const title = titleSearch;
            dispatch(searchByTitle(token,title))
            console.log(recipe)
        }
    }, [])

    const onDelete = (id) => {
        console.log(id);
        console.log(token);
        deleteRecipe(id, token)
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
            <Navbar />
            <SpaceEmpty />
            <div className={`d-flex flex-row gap-3 mb-3`}>


                <div className={`row overflow-auto`} style={wrapCard}>

                    {
                        recipe.isLoading ? (
                            <h1>Loading</h1>
                        ) : recipe.isError ? (
                            <h1>Error</h1>
                        ) : (
                            recipe.recipes.rows.map((item,index) => (
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
                        )
                    }
                   

                </div>

            </div>
            <Footer />
        </Fragment>
    )
}

export default SearchRecipe