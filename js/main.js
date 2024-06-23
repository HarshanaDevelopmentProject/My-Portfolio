let imgCounter = 1;


document.getElementById("right-arrow").addEventListener('click', () => {
   

    document.getElementById("btn" + imgCounter).style.display = "none"

    imgCounter++
    document.getElementById("btn" + imgCounter).style.display = "block"


    if (imgCounter == 2) {
        document.getElementById('about-me').style.display = "none"
        document.getElementById("skill").style.display = "flex"

    } else if (imgCounter == 3) {
        document.getElementById('skill').style.display = "none"
        document.getElementById("project").style.display = "flex"


    } else if (imgCounter == 4) {
        document.getElementById('project').style.display = "none"
        document.getElementById("contact").style.display = "flex"


    }


   

})
document.getElementById("left-arrow").addEventListener('click', () => {
    document.getElementById("btn" + imgCounter).style.display = "none"
    imgCounter--
    document.getElementById("btn" + (imgCounter)).style.display = "block"

    if (imgCounter == 2) {
        document.getElementById('about-me').style.display = "none"
        document.getElementById("skill").style.display = "flex"

    } else if (imgCounter == 3) {
        document.getElementById('skill').style.display = "none"
        document.getElementById("project").style.display = "flex"


    } else if (imgCounter == 4) {
        document.getElementById('project').style.display = "none"
        document.getElementById("contact").style.display = "flex"


    }


})

setInterval(() => {

    if (imgCounter == 1) {
        document.getElementById('right-arrow').style.display = "flex"
        document.getElementById('left-arrow').style.display = "none"

        document.getElementById('about-me').style.display = "flex"
        document.getElementById("skill").style.display = "none"

    }
    if (imgCounter == 2 || imgCounter == 3) {
        document.getElementById('right-arrow').style.display = "flex"
        document.getElementById('left-arrow').style.display = "flex"
    }
    if (imgCounter == 4) {
        document.getElementById('right-arrow').style.display = "none"
        document.getElementById('left-arrow').style.display = "flex"
    }



}, 1)



document.getElementById("btn1").addEventListener("click", () => {
    window.location.href = "page/aboutMe.html"
})

document.getElementById("btn2").addEventListener("click", () => {
    window.location.href = "page/skill.html"
})
document.getElementById("btn3").addEventListener("click", () => {
    window.location.href = "page/project.html"
})

document.getElementById("btn4").addEventListener("click", () => {
    window.location.href = "page/contact.html"
})






