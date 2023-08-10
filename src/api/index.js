import axios from "axios";

const userLoginApi=(mobile, password)=>{
    let data = JSON.stringify({
        "mobileno": mobile,
        "password": password
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://backend.epravaha.com/api/login/surveillance/mobile',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    const response = axios.request(config)
        .then((response) => {
        return response.data;
    })
    .catch(error => {
        return error.response.data
    });
    return response;
}


const getAllLotDetails=(token ,qrCode)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://backend.epravaha.com/api/surveillance/chamber/${qrCode}/lot`,
        headers: { 
            'Authorization': `Bearer ${token}`
        },
    };
    const response = axios.request(config)
        .then((response) => {
        return response.data;
    })
    .catch(error => {
        return error.response.data
    });
    return response;
}

export {userLoginApi, getAllLotDetails}