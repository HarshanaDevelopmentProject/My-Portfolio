// **************************************** top bar part ***********************************************************

document.getElementById("menu-icon").addEventListener("click", () => {
    document.getElementById("menu-icon").style.display = "none"
    document.getElementById("side-bar").style.display = "flex"
    document.getElementById("side-bar").classList.add("side-bar")

})
document.getElementById('close-bar-icon').addEventListener("click", () => {
    document.getElementById("side-bar").style.display = "none"
    document.getElementById("menu-icon").style.display = "block"

})

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        document.getElementById("top-arrow").style.display = "flex"

    } else {
        document.getElementById("top-arrow").style.display = "none"
    }
})

document.getElementById('hire-btn').addEventListener("click", () => {
    window.location.href = "../page/contact.html"
})


let text1 = "Software Developer"
let text2 = "Web Developer"
let text3 = "Mobile Developer"
let textCount = 1;

document.getElementById('top-text').textContent = text1

setInterval(() => {
    document.getElementById('top-text').style.animation = "top-bar-text-animation 3s infinite linear"
    document.getElementById('top-text').textContent = eval('text' + textCount)
    document.getElementById('top-text').style.animation = "top-bar-text-animation 3s infinite linear "

    textCount++
    if (textCount == 4) {
        textCount = 1
    }
}, 3000)



document.getElementById('skill-btn').addEventListener("click", () => {
    location.href = "../page/skill.html"
})

// ********************************************************social account part *****************************************************

document.getElementById('linkedin-icon').addEventListener("click", () => {
    window.open('https://www.linkedin.com/in/janith-harshana-56ba07317/')
})


document.getElementById('github-icon').addEventListener("click", () => {
    window.open('https://github.com/HarshanaDevelopmentProject')
})

document.getElementById('Medium-logo').addEventListener("click", () => {
    window.open('https://medium.com/@janithharshana8345')
})