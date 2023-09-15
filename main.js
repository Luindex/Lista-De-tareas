"use strict" //para los errorres
const input = document.querySelector("input")
const agregar = document.querySelector(".search__Agregar")
const vacio = document.querySelector(".vacio")

let ListaDeTareas = []

// let tarea = {
//   content: "",
// }

function renderList(ListaDeTareas) {
  const ul = document.querySelector("ul")
  ul.innerHTML = ""

  // vacio.style.display = "none"
  ListaDeTareas.forEach((data, indice) => {
    const li = document.createElement("li")
    li.classList.add("task")

    const p = document.createElement("p")
    p.innerText = data.content
    p.classList.add("task-text")

    li.appendChild(p)
    li.appendChild(bottonBorrar(indice))
    li.appendChild(buttonOk())
    ul.appendChild(li)

    console.log(data)
  })
}

renderList(ListaDeTareas)

agregar.addEventListener("click", (event) => {
  event.preventDefault()

  let text = input.value

  ListaDeTareas.push({ content: text })
  vacio.style.display = "none"
  console.log(ListaDeTareas)
  renderList(ListaDeTareas)
  input.value = ""
})

function bottonBorrar(indice) {
  const botonborrar = document.createElement("button")

  botonborrar.textContent = "X" //creamos el contenido del boton
  botonborrar.className = "BorrarTarea" //creamos la clase que se va utilizar en el css

  botonborrar.addEventListener("click", (event) => {
    // const item = event.target.parentElement

    // console.log({ event })

    // ul.removeChild(item)
    ListaDeTareas.splice(indice, 1) //Borramos el indice del array
    renderList(ListaDeTareas)

    // const items = document.querySelectorAll("li")

    if (ListaDeTareas.length === 0) {
      vacio.style.display = "block"
    }
  })
  return botonborrar
}

// Returns a button that mark the TODO as completed
function buttonOk() {
  const button = document.createElement("button")
  button.textContent = "!"
  button.className = "BottonOk"

  button.addEventListener("click", (event) => {
    const parentElement = event.target.parentElement
    const taskText = parentElement.querySelector(".task-text")
    console.log({ event })

    if (taskText.classList.contains("task__done")) {
      taskText.classList.remove("task__done")
    } else {
      taskText.classList.add("task__done")
    }
  })

  return button
}

const btn = document.getElementById("filtro")
btn.addEventListener("click", () => {
  ListaDeTareas.sort((a, b) => {
    return a.content.localeCompare(b.content)
  })
  renderList(ListaDeTareas)
})
