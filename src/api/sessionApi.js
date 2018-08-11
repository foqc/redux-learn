import axios from 'axios';
import authHeader from '../api/authHeader';
import errorAPIMessage from '../api/ErrorApiMessage';

class SessionApi {
    static login(credentials) {
        return axios.post("/auth", { credentials }).then(res =>
            res.data.user
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }

    static fetchCurrentUser() {
        const headers = authHeader();
        return axios.get("/current_user", { headers }).then(res =>
            res.data.user
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }
}

export default SessionApi;