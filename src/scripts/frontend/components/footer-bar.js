import moment from 'moment'
class FooterBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <footer class="py-3 bg-dark">
        <div class="container px-3"><p class="m-0 text-center text-white small">Copyright &copy; Food Recipe For Dummies ${moment().format('YYYY')}</p></div>
      </footer>
    `
  }
}

customElements.define('footer-bar', FooterBar)
