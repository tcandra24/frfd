class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom" >
        <div class="container px-5">
            <a class="navbar-brand" href="#page-top">Food Recipe For Dummies</a>
        </div>
      </nav>
    `
  }
}

customElements.define('app-bar', AppBar)
