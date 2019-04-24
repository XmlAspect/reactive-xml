import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `xml4jquery-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Xml4jqueryElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'xml4jquery-element',
      },
    };
  }
}

window.customElements.define('xml4jquery-element', Xml4jqueryElement);
