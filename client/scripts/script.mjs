import LatestItems from "./latest-project_component.mjs"
import { latestMas } from "./latest-project_component.mjs"
import RecentPosts, { recentMas } from "./recent_post.mjs"
//import { recentMas } from "./recent_post.mjs"
//Включение видео
function playVideo() {
  const btnOk = document.querySelector(".video__btn")
  const wrapperVideo = document.getElementById("video")
  const sectionVideo = document.querySelector(".video")
  let currentTime = 0
  btnOk.addEventListener("click", (e) => {
    if (wrapperVideo.paused) {
      e.target.classList.toggle("video_stop")
      e.target.classList.toggle("video_play")

      wrapperVideo.currentTime = currentTime
      wrapperVideo.play()
    } else {
      wrapperVideo.pause()
      currentTime = wrapperVideo.currentTime
      e.target.classList.toggle("video_play")
      e.target.classList.toggle("video_stop")

      wrapperVideo.load()
    }
  })
  sectionVideo.onmouseover = () => {
    btnOk.style.display = "block"
  }
  sectionVideo.onmouseout = () => {
    btnOk.style.display = "none"
  }
}
//Карусель изображений header
function headerCarousel() {
  let count = 0
  const img = [
      "img_header_0",
      "img_header_1",
      "img_header_2",
      "img_header_3",
      "img_header_4",
    ],
    header = document.querySelector(".header"),
    prev = document.querySelector(".header__content-arrow_prev"),
    next = document.querySelector(".header__content-arrow_next")
  prev.addEventListener("click", () => {
    count--
    if (count == 0) count = img.length - 1
    header.style.backgroundImage = `url(../img/${img[count]}.png)`
  })
  next.addEventListener("click", () => {
    count++
    if (count == img.length - 1) count = 0
    header.style.backgroundImage = `url(../img/${img[count]}.png)`
  })
  const headerSwitch = document.querySelectorAll(".header__switch-link")
  for (let i = 0; i < headerSwitch.length; i++) {
    headerSwitch[i].id = `link${i}`
  }
  headerSwitch.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(parseInt(e.target.id))
      header.style.backgroundImage = `url(../img/${
        img[e.target.id.replace(/[^0-9]/g, "")]
      }.png)`
    })
  })
}
//Простая валидация формы
function validateForm() {
  const form = document.querySelector(".feedback__form"),
    inputs = document.querySelectorAll(".form__input")

  form.onsubmit = () => {
    let emptyInputs = Array.from(inputs).filter((input) => input.value === "")
    inputs.forEach((input) => {
      if (input.value === "") {
        input.classList.add("error")
        console.log("Поле не заполнено")
      } else {
        input.classList.remove("error")
      }
    })
    if (emptyInputs.length != 0) {
      console.log("not field")
      return false
    }
  }
}
function main() {
  headerCarousel()
  playVideo()
  //Отрисовка latest items
  const latestWrp = document.querySelector(".latest-project__items")
  const latestItems = new LatestItems(latestMas)
  latestItems.sort(latestWrp)
  //Отрисовка Recent posts
  const recentWrp = document.querySelector(".resents-post__items")
  const recentPosts = new RecentPosts(recentMas, recentWrp)
  recentPosts.render()
  recentPosts.next()
  recentPosts.prev()
  validateForm()
}
main()
