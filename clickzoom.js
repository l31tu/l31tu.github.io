const cursor = document.querySelector("div.cursor")
const instruction = document.querySelector("div.instruction")

const growCursor = function () {
  cursor.classList.add("is-down")
  instruction.classList.add("shrink")
}

const shrinkCursor = function () {
  cursor.classList.remove("is-down")
  instruction.classList.remove("shrink")
}

document.addEventListener("mousedown", function () {
  growCursor()
})

document.addEventListener("mouseup", function () {
  shrinkCursor()
})
