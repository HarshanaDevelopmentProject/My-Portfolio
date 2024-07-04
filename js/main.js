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


const job1 = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
const job2 = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
const job3 = ['M', 'o', 'b', 'i', 'l', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
let time=150
const appendText = document.getElementById('my-job');

function displayNextLetter() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            appendText.append(job1[i]);
        }, i * time);
    }

    setTimeout(() => {
        appendText.textContent = '';
        displayJob2();
    }, 20 * time);
}


function displayJob2() {
    for (let i = 0; i < 13; i++) {
        setTimeout(() => {
            appendText.append(job2[i]);
        }, i * time);
    }

    setTimeout(() => {
        appendText.textContent = ''; 
        displayJob3(); 
    }, 13 * time); 
}


function displayJob3() {
    for (let i = 0; i < 16; i++) {
        setTimeout(() => {
            appendText.append(job3[i]);
        }, i * time);
    }

    setTimeout(() => {
        appendText.textContent = ''; 
        displayNextLetter(); 
    }, 16 * time); 
}


displayNextLetter();




























