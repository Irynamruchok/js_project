 let urlParams = new URLSearchParams(window.location.search)
 let userId = urlParams.get('id')

 let background = document.createElement('div')
 background.classList.add('background')

 let mainContainer = document.createElement('div')
 mainContainer.classList.add('mainContainer')

 let userDetailsAndPostContainer = document.createElement('div')
 userDetailsAndPostContainer.classList.add('userDetailsAndPostContainer')

 let postDisplayButton = document.createElement('button')
 postDisplayButton.classList.add('postDisplayButton')
 postDisplayButton.innerText = 'Post of current user'
 fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then((user) => {

    let userInfo = document.createElement('div')
    userInfo.classList.add('userInfo')
    userInfo.innerHTML =  `
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Geo:</strong> lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> <p> Name: ${user.company.name}</p> <p> Catch Phrase: ${user.company.catchPhrase}</p> <p> BS:${user.company.bs} </p></p>      
          `

        userDetailsAndPostContainer.append(userInfo,titleBlock)
})


let titleBlock = document.createElement('div')
titleBlock.classList.add('titleBlock')
titleBlock.style.visibility = 'hidden'
document.body.appendChild(titleBlock)

postDisplayButton.addEventListener('click', function () {
if (titleBlock.style.visibility === 'hidden') {
    titleBlock.style.visibility = 'visible'
} else {
    titleBlock.style.visibility = 'hidden'
}
})

 fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(res => res.json())
    .then(posts => {
        for (const post of posts) {
          let postButton =  document.createElement('div')
            postButton.classList.add('postTitleBlock')
            let postLink = document.createElement('a')
            postLink.classList.add('postLink')
            postLink.href = `post-details.html?id=${post.id}`
            console.log(post.id)
            postLink.innerText = `Post: ${post.title}`
            postLink.appendChild(postButton)
            titleBlock.appendChild(postLink)
        }

    })


// userDetailsAndPostContainer.appendChild(titleBlock)
mainContainer.append(userDetailsAndPostContainer, postDisplayButton)
background.appendChild(mainContainer)
document.body.appendChild(background)