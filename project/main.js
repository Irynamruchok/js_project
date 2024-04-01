

let url = new URL('https://jsonplaceholder.typicode.com/users')
   fetch(url)
     .then(res => res.json())
     .then((users) => {

     let background = document.createElement('div')
     background.classList.add('background')

     let mainContainer = document.createElement('div')
     mainContainer.classList.add('mainContainer')

     for (const user of users) {

        let userBlock = document.createElement('div')
        userBlock.classList.add('userBlock')

        let userNameText = document.createElement('p')
        userNameText.innerText = `ID: ${user.id} Name: ${user.name}`

        let buttonBlock = document.createElement('div')
        buttonBlock.classList.add('buttonBlock')

        let userLink  = document.createElement('a')
        userLink.href = `user-details.html?id=${user.id}`

        let button = document.createElement('button')
        button.classList.add('moreInfoButton')
        button.innerText = 'More'

        button.addEventListener('click', () => {
            button.classList.add('moveRight');
        });

        buttonBlock.appendChild(userLink)
        userLink.appendChild(button)
        userBlock.append(userNameText,buttonBlock)
        mainContainer.appendChild(userBlock)
    }

       background.appendChild(mainContainer)
       document.body.appendChild(background)
})