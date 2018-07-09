import axios from "axios";
import authHeader from '../api/authHeader';
import errorAPIMessage from '../api/ErrorApiMessage';
class BookApi {

    static getAllBooks() {
        const headers = authHeader();
        return axios.get("/books", { headers }).then(res =>
            res.data
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }

    static updateBook(book) {
        const headers = authHeader();
        return axios({
            method: 'put',
            url: `/books/${book._id}`,
            headers,
            data: {
                book
            }
        }).then(res =>
            res.data
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }

    static createBook(book) {
        const headers = authHeader();
        return axios({
            method: 'post',
            url: `/books`,
            headers,
            data: {
                book
            }
        }).then(res =>
            res.data
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }

    static deleteBook(book) {
        const headers = authHeader();
        return axios({
            method: 'delete',
            url: `/books/${book._id}`,
            headers,
            data: {
                book
            }
        }).then(res =>
            res.data
        ).catch(error => {
            throw (errorAPIMessage(error));
        });
    }
}


export default BookApi;