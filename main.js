const input = document.querySelector("input")
const agregar = document.querySelector(".Agregar")
const ul = document.querySelector("ul")
const vacio = document.querySelector(".vacio")

agregar.addEventListener("click", (e) => {
  e.preventDefault()

  const text = input.value // recibimos el contenido del input

  if (text !== "") {
    // Si el texto es diferente de vacio
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = text // el parrafo va ser igual a l contenido del input
    p.className = "task-text"

    li.appendChild(p) //a li le agregamos un parrafo
    li.appendChild(bottonBorrar()) //agremaos el boton de borrar
    li.appendChild(buttonOk()) //agregamos el boton de Ok
    ul.appendChild(li)

    li.className = "task"

    input.value = ""
    vacio.style.display = "none"
  }
})

function bottonBorrar() {
  const botonborrar = document.createElement("button")

  botonborrar.textContent = "X" //creamos el contenido del boton
  botonborrar.className = "BorrarTarea" //creamos la clase que se va utilizar en el css

  botonborrar.addEventListener("click", (event) => {
    const item = event.target.parentElement

    console.log({ event })

    ul.removeChild(item)

    const items = document.querySelectorAll("li")

    if (items.length === 0) {
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
