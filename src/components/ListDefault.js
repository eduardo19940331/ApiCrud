import axios from 'axios';

export const getListTicket = (userId) => {
    return axios.post('/api/ticket/owner', {
        userId: localStorage.getItem('userid'),
    },{
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        console.log(localStorage.getItem('userid'));
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
