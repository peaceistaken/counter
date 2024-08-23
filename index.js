// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count = count + 1
    countEl.innerText = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}


function reset() {
    count = 0
    countEl.innerText = 0
    saveEl.textContent = "Previous entries: "
}
