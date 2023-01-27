const latestMas = [
  {
    img: "../img/item-1.png",
    content: {
      h3: "Claritas Etiam Processus",
      p: "Web Design",
    },
  },
  {
    img: "../img/item-2.png",
    content: {
      h3: "Claritas Etiam Processus",
      p: "Mobile App",
    },
  },
  {
    img: "../img/item-3.png",
    content: {
      h3: "Claritas Etiam Processus",
      p: "Illustration",
    },
  },
  {
    img: "../img/item-4.png",
    content: {
      h3: "Claritas Etiam Processus",
      p: "Photography",
    },
  },
]

class LatestItems {
  constructor(items) {
    this._items = items
    this._itemsComp = []
    this._init()
  }
  _init() {
    for (let i = 0; i < this._items.length; i++) {
      const itemChild = document.createElement("div")
      itemChild.className = "latest-project__item"
      itemChild.innerHTML = `
    <div class="latest-project__block-img">
        <img class="latest-project__item-img" src="${this._items[i].img}" alt="img"">
        <div class="latest-project__hover">
            <a class="latest-project__hover-link icon-link" href="#"></a>
            <a class="latest-project__hover-link icon-lupa" href="#"></a>
        </div>
    </div>
    <div class="latest-project__item-content">
        <h3 class="latest-project__item-title">${this._items[i].content.h3}</h3>
        <p class="latest-project_item-text">${this._items[i].content.p}</p>
    </div>
    `
      this._itemsComp[i] = itemChild
    }
  }
  render(parent, element) {
    parent.appendChild(element)
  }
  sort(parent) {
    const buttons = document.querySelectorAll(".latest-project__sort-btn")
    //parent.innerHTML = ""
    for (let i = 0; i < this._items.length; i++) {
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          console.log(e.target.innerText)

          if (e.target.innerText === this._items[i].content.p) {
            parent.innerHTML = ""
            this.render(parent, this._itemsComp[i])
          }
          if (e.target.innerText === "All")
            this.render(parent, this._itemsComp[i])
        })
      })
    }
  }
}
export { latestMas }
export default LatestItems
