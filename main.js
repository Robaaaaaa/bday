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
            <div class="tenor-gif-embed" data-postid="9484708055056835056" data-share-method="host" data-aspect-ratio="0.935743" data-width="100%"><a href="https://tenor.com/view/adventure-time-princess-bubblegum-cute-gif-9484708055056835056">Adventure Time Princess Bubblegum GIF</a>from <a href="https://tenor.com/search/adventure+time-gifs">Adventure Time GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <p><span>💕💕💕</span><br>
            I know that our love for each other is strong and we will be together someday Princesss:)</p>
            <button id="third-btn">Previous</button>`
        firstMessage.innerHTML = second

        let thirdMessage =  document.getElementById("third-message")

        const thirdBtn = document.getElementById("third-btn")
        thirdBtn.addEventListener("click",function(){
            window.location.reload()
        })
    })
})
