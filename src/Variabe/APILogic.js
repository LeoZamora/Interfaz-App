let token = localStorage.getItem('token');

export function getConfigHttpReq() {
    let header = {Authorization: token}
    return { headers: header}
}