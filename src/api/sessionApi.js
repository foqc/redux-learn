class SessionApi {
    static login(credentials) {
        const request = new Request('https://my-json-server.typicode.com/foqc/fakeAPI/login/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ auth: credentials })
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default SessionApi;