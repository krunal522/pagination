import api from "./axios";

export const TradListApi = (data,limit,offset) => api(`mentor/trade_list?limit=${limit}&offset=${offset}`, 'POST', data)
export const loginApi = (data) => api('verify_otp', 'POST', data)

