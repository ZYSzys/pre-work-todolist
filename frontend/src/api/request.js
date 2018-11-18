import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000
});

service.defaults.withCredentials = true;
service.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.response.use(
    res => {
        console.log(res);
        if (res.status === 200) {
            return res.data;
        } else {
            return res;
        }
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
);

export default service;
