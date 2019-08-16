import axios from 'axios';

export const register = newUser => {
    return axios.post('api/register', newUser, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
}

export const login = user => {
    console.log(user);
    return axios.post('api/login', {
        email: user.email,
        password: user.password  
    }, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data.token);
        console.log(res);
        return res.data;
    })
    .catch(err => {
        console.log(err);
    });
}

export const getProfile = () => {
    return axios.get('api/profile', {
        headers: {Authorization: `Bearer ${localStorage.usertoken}`}
    })
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(err => {
        console.log(err);
    });
}
