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

    li.appendChild(p)
    li.appendChild(bottonBorrar())
    ul.appendChild(li)

    input.value = ""
    empty.style.display = "none"
  }
})

function bottonBorrar() {
  const botonborrar = document.createElement("button")

  botonborrar.textContent = "X"
  botonborrar.className = "BorrarTarea"

  botonborrar.addEventListener("click", (e) => {
    const item = e.target.parantElement
    ul.removeChild(item)

    const items = document.querySelector("li")

    if (item.length === 0) {
      empty.style.display = "block"
    }
  })
  return botonborrar
}
