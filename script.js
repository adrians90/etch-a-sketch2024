
const divContainer = document.querySelector(".container")
const sizeOfGrid = 16;


// const divs = document.createElement("div")
// divContainer.appendChild(divs)



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