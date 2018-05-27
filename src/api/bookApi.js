class BookApi {

    static requestHeaders() {
        return { 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` };
    }

    static handleErrors(response) {
        if (!response.ok) {
            if (response.status === 404) {
                throw Error(response.statusText || "Error 404, Not Found Resource: " + response.url);
            } else {
                throw Error(response.statusText || "Something went wrong!" + response.url);
            }
        }
        return response;
    }

    static getAllBooks() {
        const headers = this.requestHeaders();
        const request = new Request('https://my-json-server.typicode.com/foqc/fakeAPI/books', {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(this.handleErrors).then(response => {
            return response.json();
        }).catch(error => {
            throw (error);
        });
    }

    static updateBook(book) {
        const headers = this.requestHeaders();
        const request = new Request(`https://my-json-server.typicode.com/foqc/fakeAPI/books/${book.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                headers
            }),
            body: JSON.stringify(book)
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createBook(book) {
        const headers = this.requestHeaders();
        const request = new Request('https://my-json-server.typicode.com/foqc/fakeAPI/books/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                headers
            }),
            body: JSON.stringify(book)
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteBook(book) {
        const headers = this.requestHeaders();
        const request = new Request(`https://my-json-server.typicode.com/foqc/fakeAPI/books/${book.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                headers
            })
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}


export default BookApi;