let acrremente = document.querySelector("#sp")
let sp = document.querySelector("#sp")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let result = document.querySelector("#spa")
let tes = 1
function tester() {
    if (acrremente.textContent==0) {
        result.innerHTML=one.textContent
    }
    else if (acrremente.textContent==33){
        result.innerHTML=two.textContent
    }
    else if (acrremente.textContent==66){
        result.innerHTML=three.textContent
    }
    else if (acrremente.textContent==99){
        result.innerHTML="بارك الله فيك لقد أتممت يمكنك إعادة التسبيح وأخذ الأجر "
        return
    }
    acrremente.innerHTML=tes++

}
btn.addEventListener("click",()=>{
        tester() 
    })
function arréter() {
    result.innerHTML=""
    tes=1
    acrremente.innerHTML=0
}
btn2.addEventListener("click",()=>{
    arréter()
    })

