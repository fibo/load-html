export class MyComponentsFactory {
  defineElement ({ id, template }) {
    customElements.define(id, this.getElementClass({ id, template }))
  }

  getElementClass ({ id, template }) {
    switch (id) {
      default: {
        return class MyDefaultComponent extends HTMLElement {
          constructor() {
            super()
            const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
          }
        }
      }
    }
  }
}
