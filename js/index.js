const form = document.getElementById('github-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.querySelector('#search').value
    fetchByName(userInput)
})

function fetchByName(name) {
    fetch(`https://api.github.com/search/users?q=${name}`, {
        'headers': { 'Accept': 'application/vnd.github.v3+json' },
    })
    .then((resp) => resp.json())
    .then(data => renderUsers(data.items))
}

function renderUsers(usersArr) {
    console.log(usersArr)
    const usersList = document.getElementById('user-list')
    usersArr.forEach((user) => {
        console.log(user)
        const userLi = document.createElement('li')
        const userAvatar = document.createElement('img')
        const userProfile = document.createElement('p')
        userLi.textContent = user.login
        userAvatar.src = user.avatar_url 
        userProfile.textContent = user.url

        userLi.append(userAvatar, userProfile)
        usersList.appendChild(userLi)
    })
}
