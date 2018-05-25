class ColorApi {

    static requestHeaders() {
        return { 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` };
    }

    static handleErrors(response) {
        if (!response.ok) {
            if (response.status === 404) {
                throw Error("Error 404, Not Found Resource");
            } else {
                throw Error(response.statusText || "Something went wrong!");
            }
        }
        return response;
    }

    static getAllColors() {
        const headers = this.requestHeaders();
        const request = new Request('https://my-json-server.typicode.com/foqc/fakeAPI/colors', {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(this.handleErrors).then(response => {
            return response.json();
        }).catch(error => {
            throw (error);
        });
    }
}

export default ColorApi;