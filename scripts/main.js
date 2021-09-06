const btn = document.querySelector('.btn')

let input = document.querySelector('.grub')

const showMeGiffy = document.querySelector('.display')

btn.addEventListener('click', (e) =>{


    fetch('https://api.giphy.com/v1/stickers/search?api_key=d186LI8ECjrTkaimAYcnHpIhSnYi5AiI&q='+input.value+'&limit=25&offset=0&rating=g&lang=en')
    .then(response => response.json())
    .then(data =>
        {

            
            
            let showAll = ""


            data.data.forEach(element => {

                const every = (info) =>
                {
                    return `<h2>${info.title}</h2>
                            <img src=${info.images.original.url}>
                    `
                }
                
                showAll +=every(element);


            });

            showMeGiffy.innerHTML = showAll
        }
        )

})