
function Logout() {
    fetch('/api/logout');
    localStorage.removeItem('user');
    window.location.replace('/');
}

export default Logout;