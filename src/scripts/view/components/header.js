class header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="Identity">
            <img src="./images/logo/android-chrome-192x192.png" alt="AkaRestourant Logo" />
            <h2>AkaRestourant</h2>
        </section>
        <button class="menu-button" id="open-drawer">&#9776;</button>
        <nav class="drawer" id="drawer">
            <li><a href="#">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://github.com/fzkmdly">About us</a></li>
        </nav>
        `;
  }
}

customElements.define('header-app', header);
