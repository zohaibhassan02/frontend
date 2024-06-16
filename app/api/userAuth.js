import axios from 'axios';

export default async function handler(req, res) {
    const { method } = req;

    try {
        const response = await axios({
            method: method,
            url: `${process.env.BASE_URL}/product/api/${req.url}`,
            data: req.body,
            headers: req.headers,
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Something went wrong' });
    }
}