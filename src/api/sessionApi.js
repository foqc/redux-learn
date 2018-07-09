import axios from 'axios';
import errorAPIMessage from '../api/ErrorApiMessage';

class SessionApi {
    static login(credentials) {
        return axios.post("/auth", { credentials }).then(res =>
            res.data.user
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }
}

export default SessionApi;