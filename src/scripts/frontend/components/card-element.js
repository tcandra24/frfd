class CardElement extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <section class="mb-5">
      <h4 class="display-6 text-center">All Food Recipe in Many Country</h4>
      <div class="container d-flex flex-row flex-wrap justify-content-between">
        <div class="card shadow border-0 mt-3 card-width-custom">
          <img src="https://miro.medium.com/max/1000/1*Ug3M12dnx4JQuiMebhAm7A.jpeg" class="card-img-top img-fluid" style="height: 100%; object-fit: cover;" alt="European Food">
          <div class="card-body card-body-custom">
            <h5 class="card-title">European</h5>
            <small class="card-text">British, Croatian, Dutch etc.</small>
          </div>
        </div>
        <div class="card shadow border-0 mt-3 card-width-custom">
          <img src="https://www.rinag.com/wp-content/uploads/2020/02/Asian-Street-Kitchen-Festival-2019-min.jpg" class="card-img-top img-fluid" style="height: 100%; object-fit: cover;" alt="Asian Food">
          <div class="card-body card-body-custom">
            <h5 class="card-title">Asian</h5>
            <small class="card-text">Chinese, Indian, Japanese etc.</small>
          </div>
        </div>
        <div class="card shadow border-0 mt-3 card-width-custom">
          <img src="https://thumbs.dreamstime.com/b/assorted-american-food-assorted-american-food-hamburger-french-fries-bacon-fried-chicken-172985487.jpg" class="card-img-top img-fluid" style="height: 100%; object-fit: cover;" alt="American Food">
          <div class="card-body card-body-custom">
            <h5 class="card-title">American</h5>
            <small class="card-text">American, Canadian, Mexican etc.</small>
          </div>
        </div>
        <div class="card shadow border-0 mt-3 card-width-custom">
          <img src="https://vibrantwestafricancuisine.com/wp-content/uploads/2019/04/IMG_0547.jpg" class="card-img-top img-fluid" style="height: 100%; object-fit: cover;" alt="African Food">
          <div class="card-body card-body-custom">
            <h5 class="card-title">African</h5>
            <small class="card-text">Moroccan, Kenyan, Egyptian etc.</small>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

customElements.define('card-element', CardElement)
