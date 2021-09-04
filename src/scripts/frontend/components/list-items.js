class listItems extends HTMLElement {
  set items (value) {
    this._items = value
    this.render()
  }

  set category (value) {
    this._category = value
  }

  get items () {
    return this._items
  }

  get category () {
    return this._category
  }

  render () {
    this.innerHTML = `<section>
    <div class="container px-2">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-12">
          <div class="p-2">
            <h4 class="display-6 text-center">Result of Category "${this._category}" - Total ${this._items.length}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>`
    this._items.forEach(itemMeal => {
      const singleItemElement = document.createElement('single-item')
      singleItemElement.item = itemMeal
      this.appendChild(singleItemElement)
    })
  }
}

customElements.define('list-items', listItems)
