let inputColor
let inputMode

const inputColorEl = document.getElementById("input-color")
const inputModeEl = document.getElementById("mode")
const getColorBtn = document.getElementById("get-color-btn")


inputColorEl.addEventListener("input" , function(e) {
    inputColor = e.target.value.slice(1)
})

inputModeEl.addEventListener("change" , function(e) {
    inputMode = e.target.value
})

getColorBtn.addEventListener("click" , function(e) {
    renderColors()
})



function renderColors() {

    const hex = inputColor || inputColorEl.value.slice(1)
    const mode = inputMode || inputModeEl.value

    const colorElements = document.querySelectorAll(".color")
    const hexElements = document.querySelectorAll(".color-box p")

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5` , {method : "GET"})
        .then(res => res.json())
        .then(data => {
            data.colors.forEach((color , index) => {
                colorElements[index].style.backgroundColor = color.hex.value
                hexElements[index].textContent = color.hex.value
            })
        })
}

renderColors()