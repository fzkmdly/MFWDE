class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <h4>Copyright © 2023 - AkaRestaurant</h4>
    </footer>
    `;
  }
}

customElements.define('footer-bar', footerBar);
