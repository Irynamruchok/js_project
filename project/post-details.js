 let urlParams = new URLSearchParams(window.location.search)
 let postId = urlParams.get('id')

 let background = document.createElement('div')
 background.classList.add('background')

 let mainContainer = document.createElement('div')
 mainContainer.classList.add('mainContainer')

 async function fetchData(url) {
    const response = await fetch(url)
    return await response.json()
 }

 async function renderPost (postId) {

    try {

        const post = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        console.log(post)

        let postContainer = document.createElement('div')
        postContainer.classList.add('postContainer')

        let userIdValue = document.createElement('p')
        userIdValue.textContent = `User Id: ${post.userId}`

        let postIdValue = document.createElement('p')
        postIdValue.textContent = `Id:${post.id}`

        let postTitle = document.createElement('h3')
        postTitle.textContent = ` ${post.title}`

        let postText = document.createElement('p')
        postText.textContent = `Post: ${post.body}`

        postContainer.append(userIdValue,postIdValue,postTitle,postText)
        mainContainer.appendChild(postContainer)

    }catch (error) {
        console.error('Error fetching data:', error);
    }
 }
 async function renderComments(postId) {

    try {

        const comments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

        let commentsContainer = document.createElement('div')
        commentsContainer.classList.add('commentsContainer')

        comments.forEach((comment) => {

            let commentContainer = document.createElement('div')
            commentContainer.classList.add('commentContainer')
            commentContainer.innerHTML = `

               <p><strong>Name:</strong> ${comment.name}</p>
               <p><strong>Email:</strong> ${comment.email}</p>
               <p>${comment.body}</p>
           `
            commentsContainer.appendChild(commentContainer)

        })

        mainContainer.appendChild(commentsContainer)

    }catch (error) {
        console.error('Error fetching data:', error);
    }
 }

 renderPost(postId).then(() => {

    renderComments(postId).then(() => {

    });
});

 background.appendChild(mainContainer)
 document.body.appendChild(background);