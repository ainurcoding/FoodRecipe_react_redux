import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import gStyle from '../../assets/css/general.module.css';
import {updateRecipe, getRecipeById} from '../../redux/action/recipe'

import './style.css';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

const token = localStorage.getItem('token');
const UpdateRecipe = () => {
    // inline style
    const whMaxContent = {
        width: "max-content",
        height: "max-content",
    }
    const iconSize = {
        width: "52px",
        height: "52px",
        borderRadius: "10px"
    }


    const banner1wh = {
        width: "1081px",
        height: "700px"
    }
    // inline style

    const navigate = useNavigate();
    const hiddenFileInput = useRef(null)
    const [photo, setPhoto] = useState('');
    

    // for get action
    const dispatch = useDispatch();

    // useSelector for get reducer
    const recipe = useSelector((state) => {
        return state.recipe
    })

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    const { id } = useParams();
    useEffect(() => {
        dispatch(getRecipeById(id, token));
        console.log('data from id');
        console.log(recipe.data.rows)
    }, []);

    

    

    const submitHandle = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        formData.append('photo', photo);
        postHandle(Object.fromEntries(formData));
    };

    const photoUpdate = (e) => {
        const fileUploaded = e.target.files[0];
        document.getElementById('formFIle').innerHTML = fileUploaded.name;
        setPhoto(fileUploaded);
    }

    const postHandle = (form) => {
        updateRecipe(id, token, form)
            .then((res) => {
                console.log(res);
                alert('Recipe has been updated');
                setPhoto('');
                return navigate('/profile');
            })
            .catch((err) => {
                console.log(photo)
                console.log(err);
                alert('failed to update recipe');
            })
    };

    let formPost = useRef();

    const changeHandle = (e) => {
        const fileUploaded = e.target.files[0];
        document.getElementById('photoBtn').innerHTML = fileUploaded.name;
        setPhoto(fileUploaded)

    }






    return (
        <Fragment>
            <Navbar />
            <SpaceEmpty />
            <div className={`w-100 d-flex justify-content-center align-items-center`}>
                <div className="container w-100 text-center d-flex justify-content-center align-items-center">
                    <div className="row w-100 d-flex justify-content-center align-items-center">
                        <form onSubmit={submitHandle}>
                            <div className=" col-12 mb-3">

                                <div className="box-form-image">
                                    <input
                                        type="file"
                                        id="formFIle"
                                        name='photo'
                                        className="hidden"
                                        ref={hiddenFileInput}
                                        onChange={photoUpdate}
                                        />
                                    <label 
                                        htmlFor="photo" 
                                        name="photo"
                                        className="airbnb-md"
                                        id="photoBtn"
                                        onClick={handleClick}>
                                        <i className="img-icon bi bi-card-image"></i> <br />
                                        Add Photo
                                    </label>
                                </div>
                            </div>

                            {
                                recipe.data.rows.map((item, index) => (
                                    <div key={index} className=" col-12 mb-3">
                                        <input
                                            type="text"
                                            className="input-ar box-form-title airbnb-lt"
                                            id="title"
                                            name='title'
                                            defaultValue={item.title}
                                        />
                                    </div>
                                ))
                            }


                            {
                                recipe.data.rows.map((item,index) => (
                                    <div key={index} className=" col-12 mb-3">
                                        <textarea
                                            name="ingredients"
                                            id=""
                                            className="textarea-ar box-form-ing airbnb-lt"
                                            cols="30"
                                            rows="10"
                                            defaultValue={item.ingredients}
                                        ></textarea>
                                    </div>
                                ))
                            }


                            <button className="post-add mb-5" style={{ width: "80%", height: "100px", borderRadius: "10px" }} type="submit">POST</button>
                        </form>

                        <div className="space-empty mb-3"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default UpdateRecipe