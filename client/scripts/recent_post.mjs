const recentMas = [
  {
    img: "client/img/resents-post__item-1.png",
    date: {
      num: "30",
      month: "Sep",
    },
    content: {
      title: "Lorem ipsum dolor sit amet",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
    },
  },
  {
    img: "client/img/resents-post__item-2.png",
    date: {
      num: "20",
      month: "Nov",
    },
    content: {
      title: "Lorem ipsum dolor sit amet",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
    },
  },
  {
    img: "client/img/resents-post__item-3.png",
    date: {
      num: "25",
      month: "Oct",
    },
    content: {
      title: "Lorem ipsum dolor sit amet",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
    },
  },
  {
    img: "client/img/resents-post__item-1.png",
    date: {
      num: "30",
      month: "Sep",
    },
    content: {
      title: "Lorem ipsum dolor sit amet",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
    },
  },
  {
    img: "client/img/resents-post__item-3.png",
    date: {
      num: "25",
      month: "Oct",
    },
    content: {
      title: "Lorem ipsum dolor sit amet",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
    },
  },
]

class RecentPosts {
  constructor(items, parent) {
    this._items = items
    this._itemsComp = []
    this.parent = parent
    this.btns = {
      prev: 0,
      next: 3,
    }
  }
  _init(item) {
    this._items.forEach((element) => {
      const itemChild = document.createElement("article")
      itemChild.className = "resents-post__item"
      itemChild.innerHTML = `
    <div class="resents-post__item-img">
        <img class="resents-post__img" src="${element.img}" alt="img">
        <div class="resents-post__item-hover"></div>
        <div class="resents-post__date">
            <span class="resents-post__date-number">${element.date.num}</span>
            <span class="resents-post__date-mounth">${element.date.month}</span>
        </div>
    </div>
    <div class="resents-post__item-content">
        <h2 class="resents-post__item-title">${element.content.title}</h2>
        <p class="resents-post__item-text">${element.content.text}</p>
        <a class="resents-post__item-link " >Read More</a>
    </div>
    `
      this._itemsComp.push(itemChild)
    })
  }
  render() {
    if (this.parent) {
      for (let i = this.btns.prev; i < this.btns.next; i++) {
        this._init()

        this.parent.appendChild(this._itemsComp[i])
      }
    }
  }
  next() {
    const btn = document.querySelector(".resents-post__button_right")
    btn.addEventListener("click", () => {
      if (this.btns.next < this._items.length) {
        this.btns.prev++
        this.btns.next++
        this.parent.innerHTML = ""
        this.render()
      }
    })
  }
  prev() {
    const btn = document.querySelector(".resents-post__button_left")
    btn.addEventListener("click", () => {
      if (this.btns.prev > 0) {
        this.btns.prev--
        this.btns.next--
        this.parent.innerHTML = ""
        this.render()
      }
    })
  }
}
export default RecentPosts
export { recentMas }
