import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = async (url = "", method, data = {}) => {
    const token = await AsyncStorage.getItem('userData')
    const options = {
        method,
        headers: {
            'Content-Type': 'multipart/form-data',
            "vAuthorization": `Bearer ${token?.replace(/^"(.+(?="$))"$/, '$1')}`
        },
        data,
        url: `http://hexeros.com/dev/finowise/api/V1/${url}`,
    };
    return axios(options);
};

export default api;