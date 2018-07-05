import axios from 'axios';
import authHeader from '../api/authHeader';

class ColorApi {

    static getAllColors() {
        const headers = authHeader();
        return axios.get("/colors", { headers }).then(res =>
            res.data
        ).catch(error => {
            throw (error);
        });
    }
}

export default ColorApi;