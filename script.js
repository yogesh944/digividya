const userProfile = document.querySelector('.user-profile');
const userData = userProfile.querySelector('.user-data');

// Assume you have a user object with the following properties:
// { name, email, role }

userProfile.addEventListener('mouseover', () => {
    userData.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.role}</p>
    `;
});