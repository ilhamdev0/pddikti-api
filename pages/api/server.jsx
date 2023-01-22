import { axiosServer } from 'logic/apiFactory';

export default function handler(req, res) {
    if (req.method === 'POST') {
        axiosServer(req.body)
            .then(r => res.status(200).json(r.data))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(403).json({ pesan: 'Akses Dilarang!' })
    }
}
