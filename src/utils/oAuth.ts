import axios from 'axios';
import oAuthConfig from '../common/config';

const baseReq = axios.create({
    timeout: 30000,
});

baseReq.interceptors.request.use(config => config, error => Promise.reject(error));

baseReq.interceptors.response.use(
    (res) => {
        console.info('res1', res);
        return res;
    },
    error => {
        console.info('err', error);
        return Promise.reject(error);
    }
);

export default function oAuthLogin() {
    return baseReq({
        url: `login/oauth/authorize`,
        method: 'GET',
        params: {
            client_id: oAuthConfig.CLIENT_ID,
        },
    }).then(res => {
        console.info('res3', res);
        return res;
        }
    )
    .catch(err => {
        console.info(err);
    });
}