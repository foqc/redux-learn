import axios from 'axios';
import authHeader from '../api/authHeader';
import errorAPIMessage from '../api/ErrorApiMessage';

class ColorApi {

    static getAllColors() {
        const headers = authHeader();
        return axios.get("/colors", { headers }).then(res =>
            res.data
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }
}

export default ColorApi;