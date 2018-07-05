export default function requestHeaders() {
    return { 'AUTHORIZATION': `Bearer ${sessionStorage.jwt}` };
}