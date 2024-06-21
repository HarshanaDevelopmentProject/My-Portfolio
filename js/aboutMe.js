// **************************************** top bar part ***********************************************************

document.getElementById("menu-icon").addEventListener("click",()=>{
    document.getElementById("menu-icon").style.display="none"
    document.getElementById("side-bar").style.display="flex"
    document.getElementById("side-bar").classList.add("side-bar")
    
})
document.getElementById('close-bar-icon').addEventListener("click",()=>{
    document.getElementById("side-bar").style.display="none"
    document.getElementById("menu-icon").style.display="block"
    
})

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>500){
        document.getElementById("top-arrow").style.display="flex"

    }else{
        document.getElementById("top-arrow").style.display="none"
    }
})

// ********************************************************social account part *****************************************************

document.getElementById('linkedin-icon').addEventListener("click",()=>{
    window.open('https://www.linkedin.com/')
})