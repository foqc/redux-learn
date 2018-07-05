import axios from 'axios';

class SessionApi {
    static login(credentials) {
        return axios.post("/auth", { credentials }).then(res =>
            res.data.user
        ).catch(error => {
            throw (error);
        });
    }
}

export default SessionApi;