import axios, { Canceler } from 'axios';
import baseConfig from './baseConfig';

let pending: Array<{
    url: string,
    cancel: Function,
}>;

const removePending = config => {
    for (let p in pending) {
        if (pending.hasOwnProperty(p)) {
            let item: any = p;
            let list: any = pending[p];
            if (list.url === config.url + '&request_type=' + config.method) {
                list.cancel();
                pending.splice(item, 1);
            }
        }
    }
};

const Service = axios.create(baseConfig);

Service.interceptors.request.use(
    req => {
        removePending(req);
        baseConfig.cancelToken = new axios.CancelToken((cancel: Canceler) => {
            pending.push({
                url: baseConfig.url + '&request_type=' + baseConfig.method,
                cancel: cancel,
            });
        });
        return baseConfig;
    },
    error => Promise.reject(error)
);

Service.interceptors.response.use(
    res => {
        removePending(res.config);
        return res;
    },
    error => Promise.reject(error)
);

export default Service;
