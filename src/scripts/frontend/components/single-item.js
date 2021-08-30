import Data from '../../backend/data.js'

class singleItems extends HTMLElement {
  set item (value) {
    this._item = value
    this.render()
  }

  get item () {
    return this._item
  }

  set backendObject (value) {
    this._backendObject = value
  }

  get backendObject () {
    return this._backendObject
  }

  static get observedAttributes () {
    return ['value']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    this.querySelector('.detail-body').innerHTML = this.value
  }

  render () {
    this.innerHTML = `
    <section>
      <div class="container px-2">
        <div class="card my-4 shadow border-0">
          <div class="card-body">
            <div class="row gx-5 align-items-center">
              <div class="col-lg-6 order-lg-1 border-end">
                <div class="p-2" style="text-align: center;"><img class="img-fluid rounded-circle" style="width: 200px;" src="${this._item.strMealThumb}" alt="..." /></div>
              </div>
              <div class="col-lg-6 order-lg-2">
                <div class="p-2 d-flex flex-row justify-content-between">
                  <h3 class="display-4 meal-name" data-bs-toggle="collapse" data-bs-target="#collapse-${this._item.idMeal}" aria-expanded="false" aria-controls="collapse-${this._item.idMeal}">${this._item.strMeal}</h3>
                  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this._item.idMeal}" aria-expanded="false" aria-controls="collapse-${this._item.idMeal}">
                    <i class="bi bi-caret-down" style="font-size: 20px;"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-12 p-2">
                <div class="collapse" id="collapse-${this._item.idMeal}">
                  <div class="card card-body detail-body">
                    <div class="spinner-border" role="status" style="margin: 0 auto;">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `

    this.querySelector(`#collapse-${this._item.idMeal}`).addEventListener('show.bs.collapse', () => {
      Data.getData(`lookup.php?i=${this._item.idMeal}`)
        .then(({ data }) => {
          // console.log(data.meals[0])
          const result = data.meals[0]
          this.value = `
          <h3> ${result.strMeal} </h3>
          <div class="d-flex flex-row">
            <span class="badge rounded-pill bg-light text-dark m-1 border" style="width: fit-content;">${result.strCategory}</span>
            <span class="badge rounded-pill bg-light text-dark m-1 border" style="width: fit-content;">${result.strArea}</span>
          </div>
          <p class="m-1" style="text-align: justify;">${result.strInstructions}</p>
          <h5 class="m-1"> Recipe: </h5>
          <div class="d-flex flex-row">
            <ul class="list-group list-group-flush m-1 flex-fill">
              <li class="list-group-item">${result.strIngredient1} - <small>${result.strMeasure1}</small></li>
              <li class="list-group-item">${result.strIngredient2} - <small>${result.strMeasure2}</small></li>
              <li class="list-group-item">${result.strIngredient3} - <small>${result.strMeasure3}</small></li>
              <li class="list-group-item">${result.strIngredient4} - <small>${result.strMeasure4}</small></li>
              <li class="list-group-item">${result.strIngredient5} - <small>${result.strMeasure5}</small></li>
              <li class="list-group-item">${result.strIngredient6} - <small>${result.strMeasure6}</small></li>
              <li class="list-group-item">${result.strIngredient7} - <small>${result.strMeasure7}</small></li>
              <li class="list-group-item">${result.strIngredient8} - <small>${result.strMeasure8}</small></li>
              <li class="list-group-item">${result.strIngredient9} - <small>${result.strMeasure9}</small></li>
              <li class="list-group-item">${result.strIngredient10} - <small>${result.strMeasure10}</small></li>
            </ul>
            <ul class="list-group list-group-flush m-1 flex-fill">
              <li class="list-group-item">${result.strIngredient11} - <small>${result.strMeasure11}</small></li>
              <li class="list-group-item">${result.strIngredient12} - <small>${result.strMeasure12}</small></li>
              <li class="list-group-item">${result.strIngredient13} - <small>${result.strMeasure13}</small></li>
              <li class="list-group-item">${result.strIngredient14} - <small>${result.strMeasure14}</small></li>
              <li class="list-group-item">${result.strIngredient15} - <small>${result.strMeasure15}</small></li>
              <li class="list-group-item">${result.strIngredient16} - <small>${result.strMeasure16}</small></li>
              <li class="list-group-item">${result.strIngredient17} - <small>${result.strMeasure17}</small></li>
              <li class="list-group-item">${result.strIngredient18} - <small>${result.strMeasure18}</small></li>
              <li class="list-group-item">${result.strIngredient19} - <small>${result.strMeasure19}</small></li>
              <li class="list-group-item">${result.strIngredient20} - <small>${result.strMeasure20}</small></li>
            </ul>
          </div>
          `
          // this.value = data.meals[0].strInstructions
        }).catch(error => {
          console.log(error)
        })
    })
  }

  get value () {
    return this.getAttribute('value')
  }

  set value (newValue) {
    this.setAttribute('value', newValue)
  }
}

customElements.define('single-item', singleItems)
