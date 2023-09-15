function renderList(data) {
  const listElem = document.querySelector(".list")
  listElem.innerHTML = ""

  // normal case ✅
  data.forEach((color) => {
    const itemElem = document.createElement("li")
    itemElem.innerText = color.name

    listElem.appendChild(itemElem)
  })
}

// data
let colors = [
  { id: 1, name: "yellow" },
  { id: 2, name: "blue" },
  { id: 3, name: "red" },
]

// init
renderList(colors)

// add onClick
const btn = document.getElementById("sort-btn")
btn.addEventListener("click", () => {
  colors = _.sortBy(colors, (color) => color.name)
  renderList(colors)
})

agregar.addEventListener("click", (event) => {
  event.preventDefault()

  let text = input.value

  tarea.content = text

  ListaDeTareas.push({ content: text })

  if (text !== "") {
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = tarea.content
    p.className = "task-text"

    li.appendChild(p)
    li.appendChild(bottonBorrar())
    li.appendChild(buttonOk())
    ul.appendChild(li)
    ul.className = "list"

    li.className = "task"
    input.value = ""
    vacio.style.display = "none"
  }
})
