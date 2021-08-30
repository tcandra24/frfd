class searchData extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set eventBtn (event) {
    this._eventBtn = event
    this.render()
  }

  get eventBtn () {
    return this._eventBtn
  }

  get value () {
    return this.querySelector('#list-categories').value
  }

  render () {
    this.innerHTML = `
    <header class="masthead text-center text-white" style="padding-bottom: 0;">
      <div class="masthead-content">
          <div class="container px-2">
              <h1 class="masthead-heading mb-0">Find Food</h1>
              <div class="masthead-subheading mb-0 col-lg-6" style="margin: 0 auto;">
                <select class="form-control form-select form-control-custom shadow-sm" name="keyword-category" id="list-categories">
                  <option value="" selected>Pilih Kategori</option>
                </select>
              </div>
              <a class="btn btn-primary btn-xl rounded-pill mt-5 shadow-sm" id="btnSearchElement" style="color: white;">Search</a>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,218.7C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
    </header>
    `

    this.querySelector('#btnSearchElement').addEventListener('click', this._eventBtn)
  }
}

customElements.define('search-data', searchData)
