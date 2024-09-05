const a = document.querySelector("body");
const b = document.querySelectorAll(".color-container")
const rst = document.querySelector(".reset-btn")

b.forEach((b)=>{
    b.addEventListener("click", (e)=>{
        let c = e.target.id;
        console.log(c);
        a.style.backgroundColor = e.target.id   ;
    })
})