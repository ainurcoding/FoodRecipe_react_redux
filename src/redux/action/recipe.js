import axios from 'axios'

const token = localStorage.getItem('token');
const URL = process.env.REACT_APP_BACKEND_URL;

export const ListRecipe = () => {
    // console.log(token);
    return {

        type: 'GET_LIST_RECIPE',
        payload: axios({
            url: `${URL}/foodRecipe`,
            // headers: {
            //     token: token
            // },
            method: 'GET'
        })
    }
}

export const getRecipeById = (id, token) => {
    return {
        type: 'GET_RECIPE_BYID',
        payload: axios({
            url: `${URL}/foodRecipe/id/${id}`,
            headers: {
                token: token
            },
            method: 'GET',
        })
    }
}

export const searchByTitle = (token, title) => {
    return {
        type: 'SEARCH_RECIPE_BY_TITLE',
        payload: axios({
            url: `${URL}/foodRecipe/${title}`,
            headers: {
                token: token
            },
            method: 'GET',
        })
}
}


export const addRecipe = (form, token) => {

    // const [token, setToken] = useState();

    return new Promise((resolve, reject) => {
        axios
            .post(`${URL}/addRecipe`, form,
                {
                    headers: {
                        token: token,
                    }
                })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export const deleteRecipe = (id, token) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${URL}/deleteRecipe/${id}`,
                {
                headers: {
                    token: token,
                }
            })
        .then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
})
}

export const updateRecipe = (id, token, form) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`${URL}/updateRecipe/${id}`, form, 
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: token,
                    
                }
            })
        .then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
})
}

