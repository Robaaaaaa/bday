const firstBtn = document.getElementById("first-btn")
let firstMessage = document.getElementById("first-message")

firstBtn.addEventListener("click",function(){
    let second= `
        <video src="high1.mp4" width ="150px" autoplay loop></video>
        <p>You're My best Friend I'll love you forever🌟🌟</p>
        <button id='second-btn'>Next</button>`        
    firstMessage.innerHTML = second


    let secondMessage = document.getElementById("second-message")

    const secondBtn = document.getElementById("second-btn")
    secondBtn.addEventListener("click",function(){
        second = `
            <img src='img.jpg' alt="spider x kitty" width='150px'>
            <p><span>Issaiah💕 52:13-15❤ </span><br>
            God loves you sm and has all the best for you plannned out. You can do this love, you're attracting all that you ever desired in this lifetime, you're healing, and you generate so much happiness in very room.
            Remember, I love you okay? :)</p>
            <button id="third-btn">Previous</button>`
        firstMessage.innerHTML = second

        let thirdMessage =  document.getElementById("third-message")

        const thirdBtn = document.getElementById("third-btn")
        thirdBtn.addEventListener("click",function(){
            window.location.reload()
        })
    })
})
