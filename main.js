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
const spinner = document.querySelector('.lds-spinner')
const endpoint = 'https://api.github.com/users/';

async function getData(user) {
    const response = await fetch(`${endpoint}${user}`);
    const data = await response.json();
    displayData(data);
}

function handleError(error) {
    console.log(error);
    clearData();
    spinner.style.opacity = '0';
    image.src = 'img/404-error-not-found.png';
    userInfo.textContent = 'Check if you typed correct user name.';
    userInfo.style.margin = 'auto';
}

function displayData(data) {
    if (!data.message) {
        image.src = data.avatar_url;
        image.style.border = '1px solid rgb(27, 26, 26, .7)';
        userInfo.textContent = `User name: ${data.name}`;
        idInfo.textContent = `User ID: ${data.id}`;
        locationInfo.textContent = `User location: ${data.location}`;
        bioInfo.textContent = `User bio: ${data.bio}`;
        publicRepos.textContent = `User public repositories: ${data.public_repos}`;
        userFollowers.textContent = `User followers: ${data.followers}`;
        accountCreated.textContent = `Account created at: ${data.created_at}`;
        spinner.style.opacity = '0';
    } else handleError();
}

function clearData() {
    image.src = '';
    image.style.border = 'none';
    userInfo.textContent = '';
    idInfo.textContent = '';
    locationInfo.textContent = '';
    bioInfo.textContent = '';
    publicRepos.textContent = '';
    userFollowers.textContent = '';
    accountCreated.textContent = '';
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    spinner.style.opacity = '1';
    getData(inputField.value);
    clearData();
})