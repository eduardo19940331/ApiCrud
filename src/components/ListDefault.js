import axios from 'axios';

export const getListTicket = (userId) => {
    return axios.post('/api/ticket/owner', {
        userId: 1, //userId,
    },{
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    })
}

export const confirmTicket = (itemId) => {
    return axios.post('/api/ticket/confirm', {
        itemId:itemId
    },{
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        console.log(res);
    });
}
