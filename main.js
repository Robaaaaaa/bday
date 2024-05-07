const firstBtn = document.getElementById("first-btn")
let firstMessage = document.getElementById("first-message")

firstBtn.addEventListener("click",function(){
    let second= `
        <div class='tenor-gif-embed' data-postid='22645850' data-share-method='host' data-aspect-ratio='1.06312' data-width='100%'><a href='https://tenor.com/view/hug-gif-22645850'>Hug Sticker</a>from <a href='https://tenor.com/search/hug-stickers'>Hug Stickers</a></div>
        <p>I celebrate you and the special place you have in my heart</p>
        <button id='second-btn'>Click2</button>`

    firstMessage.innerHTML = second


    let secondMessage = document.getElementById("second-message")

    const secondBtn = document.getElementById("second-btn")
    secondBtn.addEventListener("click",function(){
        second = `
            <img src='img.jpg' alt="spider x kitty" width='150px'>
            <p>Issaiah💕 52:13-15❤ <br>
            God loves you sm and has all the best for you plannned out. You can do this love, you're attracting all that you ever desired in this lifetime, you're healing, and you generate so much happiness in very room.
            Remember, I love you okay? 🙂</p>
            <button id="third-btn">Previous</button>`
        firstMessage.innerHTML = second

        let thirdMessage =  document.getElementById("third-message")

        const thirdBtn = document.getElementById("third-btn")
        thirdBtn.addEventListener("click",function(){
            window.location.reload()
        })
    })
})