import axios from 'axios';

export function apiReq(endPoint, data, method, headers, requestOptions = {}) {
    return new Promise((res, rej) => {
        headers = { ...headers };

        if (method === 'get' || method === 'delete') {
            data = { ...requestOptions, ...data, headers };
        }

        axios[method](endPoint, data, { headers })
            .then(result => {
                const { data } = result;
                if (data.status === false) {
                    return rej(data);
                }
                return res(data);
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.status === 401) {
                    return rej({ ...error.response.data, msg: "Unauthorized" });
                }
                if (error.response && error.response.data && !error.response.data.message) {
                    return rej({ ...error.response.data, msg: "Network Error" });
                }
                return rej({ message: "Network Error", msg: "Network Error" });
            });
    });
}

export function apiPost(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
    return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key, value) {
    console.log("key--->",key)
    console.log("value---->", value)
    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error("Error raised during setItem", error);
    }
}

export function getItem(key) {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        console.log("error",error)
        // throw error;
    }
}

export function clearAllItem() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error("Error raised during clearAllItem", error);
    }
} 