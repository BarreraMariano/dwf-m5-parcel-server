class WelcomePage extends Element {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <my-jugada jugada="piedra"></my-jugada>
    <my-jugada jugada="papel"></my-jugada>
    `;
  }
}
