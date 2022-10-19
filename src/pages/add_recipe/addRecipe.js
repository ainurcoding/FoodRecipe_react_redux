import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import gStyle from '../../assets/css/general.module.css';
import axios from 'axios';
import {addRecipe} from '../../redux/action/recipe'

import './style.css';
const token = localStorage.getItem('token');
const AddRecipe = () => {
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

    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: '',
        ingredients: '',
        video: '',
    })

    const [photo, setPhoto] = useState();
    

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form, photo);
        let body = new FormData ()
        body.append('title', form.title)
        body.append('ingredients', form.ingredients)
        body.append('photo', photo)

        addRecipe(body, token)
        .then((res) => {
            console.log(res)
            alert('success post data');
            return navigate('/profile');
        }).catch((err) => {
            console.log(err)
        })


    }

    return (
        <Fragment>
            <Navbar />
            <SpaceEmpty />
            <div className={`w-100 d-flex justify-content-center align-items-center`}>
                <div className="container w-100 text-center d-flex justify-content-center align-items-center">
                    <div className="row w-100 d-flex justify-content-center align-items-center">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className=" col-12 mb-3">
                                <div className="box-form-image">
                                    <input 
                                        type="file" 
                                        id="files" 
                                        className="hidden"
                                        onChange={(e) => {setPhoto(e.target.files[0])}} />
                                    <label htmlFor="files" className="airbnb-md">
                                        <i className="img-icon bi bi-card-image"></i> <br />
                                        Add Photo
                                    </label>
                                </div>
                            </div>
                            <div className=" col-12 mb-3">
                                <input 
                                    type="text" 
                                    className="input-ar box-form-title airbnb-lt" 
                                    id="title" 
                                    placeholder="title" 
                                    onChange={(e) => {setForm({...form, title: e.target.value})}}/>
                            </div>
                            <div className=" col-12 mb-3">
                                <textarea 
                                    name="" 
                                    id="" 
                                    className="textarea-ar box-form-ing airbnb-lt" 
                                    cols="30" 
                                    rows="10" 
                                    placeholder="ingredients"
                                    onChange={(e) => {setForm({...form, ingredients: e.target.value})}}></textarea>
                            </div>
                            {/* <div className=" col-12 mb-3">
                                <textarea 
                                    name="" 
                                    id="" 
                                    className="textarea-ar box-form-ing airbnb-lt" 
                                    cols="30" 
                                    rows="10" 
                                    placeholder="description"
                                    onChange={(e) => {setForm({...form, description: e.target.value})}}></textarea>
                            </div> */}
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

export default AddRecipe