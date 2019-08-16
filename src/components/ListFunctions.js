import axios from 'axios'

export const getList = () => {
    return axios.get('/api/ticket', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    })
}

export const dataUserCmb = () => {
    return axios.post('/api/cmb_user/', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    });
}

export const getTicket = id => {
    return axios.get(`/api/ticket/${id}`, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    })
}

export const addItem = (detail, userId ) => {
    return axios
    .post('/api/ticket', {
        detail: detail,
        user: userId,
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        //console.log(res);
    });
}

export const updateItem = (detail, selUser, id) => {
    return axios.put(`/api/ticket/${id}`, {
        detail: detail,
        selUser: selUser
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        //console.log(res);
    }).catch(err => {
        console.log(err);
    });
}

export const deleteItem = id => {
    axios.delete(`/api/ticket/${id}`, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        //console.log(res);
    }).catch(err => {
        console.log(err);
    });
}
