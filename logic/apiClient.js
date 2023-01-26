import { axiosClient, APITimeout, internalAPI } from './apiFactory';
import Cryptr from 'cryptr';

const encrypt = (data) => {
    return new Cryptr(
        process.env.NEXT_PUBLIC_API_SECRET,
        {
            pbkdf2Iterations: parseInt(process.env.NEXT_PUBLIC_API_PBKDF2ITERATION),
            saltLength: parseInt(process.env.NEXT_PUBLIC_API_SALTLENGTH)
        }
    ).encrypt(data)
}

const payload_creator = (nama, url) => {
    return {
        "method": "get",
        "timeout": APITimeout,
        "url": encrypt(decodeURI(`${url}${nama}`))
    }
}

export const getMahasiswa = (nama) => {
    const url = process.env.NEXT_PUBLIC_URL_MHS
    const data = payload_creator(nama, url)

    return axiosClient.post(internalAPI, data);
}

export const getDosen = (nama) => {
    const url = process.env.NEXT_PUBLIC_URL_DOSEN
    const data = payload_creator(nama, url)

    return axiosClient.post(internalAPI, data);
}