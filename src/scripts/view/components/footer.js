class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <h4>Copyright © 2023 - AkaRestourant</h4>
    </footer>
    `;
  }
}

customElements.define('footer-bar', footerBar);
