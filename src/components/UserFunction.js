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
        if(res){
            localStorage.setItem('usertoken', res.data.token.token);
            localStorage.setItem('userid', res.data.user.id);
            localStorage.setItem('id_tipouser', res.data.user.id_tipouser);
            return res.data;
        }
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
        console.log(res.data.user.id);
        localStorage.setItem('userid', res.data.user.id);
        localStorage.setItem('id_user', res.data.user.id_user);
        return res.data;
    })
    .catch(err => {
        console.log(err);
    });
}
