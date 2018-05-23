class ColorApi {

    static requestHeaders() {
        return { 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` };
    }

    static getAllColors() {
        const headers = this.requestHeaders();
        const request = new Request('https://my-json-server.typicode.com/foqc/fakeAPI/colors', {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default ColorApi;