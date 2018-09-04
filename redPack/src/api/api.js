import axios from 'axios'

// const service = axios.creat({
//     baseURl:'https://leyoutest.fangte.com/V4/api/',
//     timeout:4000
// });
export const getRedpackinfo = params =>{
    return axios.get('https://leyoutest.fangte.com/V4/api/Customer/GetWeiXinParam?AbsoluteUri',
    {
        params:params
    })
}
export const sendSms  = params =>{
    return axios.post('https://leyoutest.fangte.com/V4/api/Customer/VerificationTransfer',params)
}

export const nowReceive = params => {
    return axios.post('https://leyoutest.fangte.com/V4/api/Customer/CouponTransfer',params).then(res =>res.data) 
}
