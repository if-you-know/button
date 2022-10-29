import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

@customElement('xox-button')
export class XoxButton extends LitElement {
  @property() name?: string

  render() {
    console.log(this.name)
    return html`
      <button name=${ifDefined(this.name)}>
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'xox-button': XoxButton
  }
}
