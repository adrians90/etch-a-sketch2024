
const divContainer = document.querySelector(".container")
const sizeOfGrid = 26;
const resetBtn = document.querySelector(".btn-reset")




function createGrid(amtOfGrids) {
    const wrapper= document.createElement("div")
    wrapper.classList.add("wrapper")

    for(let i = 0; i<amtOfGrids; i++) {
        const row = document.createElement("div")
        row.classList.add("grid-row")
        for(let j = 0; j<amtOfGrids; j++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid-box")
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "#DC143C"
            })
            row.appendChild(gridBox)
        }
        wrapper.appendChild(row)
    }
    divContainer.appendChild(wrapper)
}

createGrid(sizeOfGrid)

resetBtn.addEventListener("click", () => {
    let userSize = Number(prompt("Enter new grid dimensions:"))

    if(userSize > 40) {
        userSize = Number(prompt("Pick a number that is 40 or less:"))
    }

    const wrapper = document.querySelector(".wrapper")
    wrapper.remove()
    createGrid(userSize)
})