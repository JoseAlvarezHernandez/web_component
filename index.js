class DumbComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:'open'}).innerHTML = '<h1>My Component</h1>';
  }
}

customElements.define('dumb-component',DumbComponent);
