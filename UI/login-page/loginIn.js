document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('usernameid');
    const loginButton = document.getElementById('submit');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const disp = document.getElementById('registeracc')
    loginButton.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            const accessHeader = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ username: username.value, password: password.value })
            };

            const response = await fetch('https://brand-backend-side.onrender.com/logininfo/login', accessHeader);
            const data = await response.json();

            if (data.status === 'ok') {
                localStorage.setItem('token', JSON.stringify({ token: data.token, isAuthenticated: true }));
                if (data.message === 'Admin') {
                    window.location.href = '../admin/dashboard.html'; // Redirect to admin dashboard
                } else {
                    const id = localStorage.getItem('blogId')
                    window.location.href = `https://ruthuwamahoro.github.io/My-Brand-Ruth/UI/blogs/blog1.html?id=${id}`; // Redirect to blogs page
                }
            } else {
                errorMessage.textContent = data.error;
            }
        } catch (err) {
            console.log(err);
        }
    });
});

