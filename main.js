const inputField = document.querySelector('.user-name');
const btnSubmit = document.querySelector('.submit');
const image = document.querySelector('.image');
const userInfo = document.querySelector('.user');
const idInfo = document.querySelector('.id');
const locationInfo = document.querySelector('.location');
const bioInfo = document.querySelector('.bio');
const publicRepos = document.querySelector('.public-repos');
const userFollowers = document.querySelector('.followers');
const accountCreated = document.querySelector('.account');
let endpoint;


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    endpoint = `https://api.github.com/users/${inputField.value}`;
    displayData();
})


async function displayData() {
    // user.textContent = 'Loading...';
    const response = await fetch(endpoint);
    const data = await response.json();
    image.src = data.avatar_url;
    userInfo.textContent = `User name: ${data.name}`;
    idInfo.textContent = `User ID: ${data.id}`;
    locationInfo.textContent = `User location: ${data.location}`;
    bioInfo.textContent = `User bio: ${data.bio}`;
    publicRepos.textContent = `User public repositories: ${data.public_repos}`;
    userFollowers.textContent = `User followers: ${data.followers}`;
    accountCreated.textContent = `Account created: ${data.created_at}`;
}