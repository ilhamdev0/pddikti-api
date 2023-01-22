import { axiosClient, APITimeout, internalAPI } from './apiFactory';

const payload_creator = (nama, url) => {
    return {
        "method": "get",
        "timeout": APITimeout,
        "url": decodeURI(`${url}${nama}`)
    }
}

export const getMahasiswa = (nama) => {
    const url = 'https://api-frontend.kemdikbud.go.id/hit_mhs/'
    const data = payload_creator(nama, url)
    
    return axiosClient.post(internalAPI, data);
}

export const getDosen = (nama) => {
    const url = 'https://api-frontend.kemdikbud.go.id/hit/'
    const data = payload_creator(nama, url)

    return axiosClient.post(internalAPI, data);
}