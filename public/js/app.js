



const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    let address = document.getElementById("address").value

    let messageOne = document.getElementById("messageOne")
    let messageTwo = document.getElementById("messageTwo")

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
   
    let url = "http://localhost:3000/weather?address="+address
    fetch(url).then((response) => {
        response.json().then((data) =>{
            if(data.error){
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})