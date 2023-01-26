import { axiosServer } from 'logic/apiFactory';
import Cryptr from 'cryptr';

const decrypt = (data) => {
    return new Cryptr(
        process.env.NEXT_PUBLIC_API_SECRET,
        {
            pbkdf2Iterations: parseInt(process.env.NEXT_PUBLIC_API_PBKDF2ITERATION),
            saltLength: parseInt(process.env.NEXT_PUBLIC_API_SALTLENGTH)
        }
    ).decrypt(data)
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        req.body.url = decrypt(req.body.url)

        axiosServer(req.body)
            .then(r => res.status(200).json(r.data))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(403).json({ pesan: 'Akses Dilarang!' })
    }
}
