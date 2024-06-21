let imgCounter = 1;

// if (2>imgCounter) {
// document.getElementById('left-arrow').style.display = "none"
// } 
document.getElementById("right-arrow").addEventListener('click', () => {
    // if (1 <= imgCounter) {
    //     document.getElementById('left-arrow').style.display = "flex"
    // } else {
    //     document.getElementById('left-arrow').style.display = "none"
    // }

    document.getElementById("btn" + imgCounter).style.display = "none"
    imgCounter++
    document.getElementById("btn" + imgCounter).style.display = "block"

    // if (imgCounter == 4) {
    //     document.getElementById('right-arrow').style.display = "none"
    //     // imgCounter=1
    // }

})
document.getElementById("left-arrow").addEventListener('click', () => {
    document.getElementById("btn" + imgCounter).style.display = "none"
    imgCounter--
    document.getElementById("btn" + (imgCounter)).style.display = "block"


})

setInterval(() => {

    if (imgCounter == 1) {
        document.getElementById('right-arrow').style.display = "flex"
        document.getElementById('left-arrow').style.display = "none"
         
    }
    if(imgCounter==2||imgCounter==3){
         document.getElementById('right-arrow').style.display = "flex"
        document.getElementById('left-arrow').style.display = "flex"
    }
    if (imgCounter==4) {
         document.getElementById('right-arrow').style.display = "none"
        document.getElementById('left-arrow').style.display = "flex"
    }
   


}, 1)



document.getElementById("btn1").addEventListener("click", () => {
    window.location.href = "/page/aboutMe.html"
})

document.getElementById("btn2").addEventListener("click", () => {
    window.location.href = "/page/skill.html"
})
document.getElementById("btn3").addEventListener("click", () => {
    window.location.href = "/page/project.html"
})

document.getElementById("btn4").addEventListener("click", () => {
    window.location.href = "/page/contact.html"
})



