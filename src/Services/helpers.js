export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'))
    
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token, 'Content-Type': 'application/json' }
    } else {
        return {}
    }
}


export function handleResponse(response) {
    return response.text().then(text => {
    const data = text && JSON.parse(text)
    console.log(data)
    if (!response.ok) {
        if (response.status === 401) {
            logout()
        }

        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
    }
    return data
    })
}


export const logout = () => {
localStorage.removeItem('user')
localStorage.removeItem('view')
window.location.reload(true)
}