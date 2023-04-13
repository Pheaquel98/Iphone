// Variables //

const button = document.querySelector(".bar")
const lockscreen = document.querySelector(".lock-container")
const blur = document.querySelector(".lock-blur")
const cancel = document.querySelector(".cancel")
const numButton = Array.from(document.getElementsByClassName("btn"))
const firstLock = document.querySelector(".fourth-lock")
const secondLock = document.querySelector(".third-lock")
const thirdLock = document.querySelector(".second-lock")
const fourthLock = document.querySelector(".first-lock")
const enter = document.querySelector(".enter")
let values = []
let clicked = 0
let x

// Variables //

// Buttons //

button.addEventListener("click", function () {
  lockscreen.classList.add("display")
  blur.classList.add("blur")
})

cancel.addEventListener("click", function () {
  lockscreen.classList.remove("display")
  blur.classList.remove("blur")
  values = []
  clicked = 0
  console.log(values)

  if (firstLock.classList.contains("active")) {
    firstLock.classList.remove("active")
  }
  if (secondLock.classList.contains("active")) {
    secondLock.classList.remove("active")
  }
  if (thirdLock.classList.contains("active")) {
    thirdLock.classList.remove("active")
  }
  if (fourthLock.classList.contains("active")) {
    fourthLock.classList.remove("active")
  }
})

numButton.map((button) => {
  button.addEventListener("click", (e) => {
    clicked = clicked + 1
    if (clicked == 1) {
      firstLock.classList.add("active")
    }
    if (clicked == 2) {
      secondLock.classList.add("active")
    }
    if (clicked == 3) {
      thirdLock.classList.add("active")
    }
    if (clicked == 4) {
      fourthLock.classList.add("active")
    }

    values.push(e.target.innerText)
    let trueArray = ["2", "5", "2", "5"]
    let value = values.toString()

    if (trueArray == value) {
      setTimeout(() => {
        alert("Correct Password")
        window.location.reload(true)
      }, 250)
    } else if (values.length == 4) {
      setTimeout(() => {
        incorrectPass()
        values = []
        clicked = 0
        if (firstLock.classList.contains("active")) {
          firstLock.classList.remove("active")
        }
        if (secondLock.classList.contains("active")) {
          secondLock.classList.remove("active")
        }
        if (thirdLock.classList.contains("active")) {
          thirdLock.classList.remove("active")
        }
        if (fourthLock.classList.contains("active")) {
          fourthLock.classList.remove("active")
        }
      }, 250)
    }
  })
})

function incorrectPass() {
  clearTimeout(x)
  enter.classList.add("transition-in")
  x = setTimeout(() => {
    enter.classList.remove("transition-in")
  }, 2000)
}
