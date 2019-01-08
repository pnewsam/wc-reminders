import template from "./template.js";

class TodoItem extends HTMLElement {
  constructor() {
    super();
    let templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));

    this.$item = shadowRoot.querySelector(".item");
    this.$removeButton = shadowRoot.querySelector("button");
    this.$label = shadowRoot.querySelector("label");
    this.$checkbox = shadowRoot.querySelector("input");

    this.$removeButton.addEventListener("click", e => {
      this.dispatchEvent(new CustomEvent("onRemove", { detail: this.index }));
    });

    this.$label.addEventListener("click", e => {
      this.dispatchEvent(new CustomEvent("onToggle", { detail: this.index }));
    });
  }

  connectedCallback() {
    if (!this.hasAttribute("text")) {
      this.setAttribute("text", "placeholder");
    }

    this._renderTodoItem();
  }

  _renderTodoItem() {
    if (this.hasAttribute("checked")) {
      this.$item.classList.add("completed");
      this.$checkbox.setAttribute("checked", "");
    } else {
      this.$item.classList.remove("completed");
      this.$checkbox.removeAttribute("checked");
    }

    this.$label.innerHTML = this._text;
  }

  static get observedAttributes() {
    return ["text"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._text = newValue;
  }
}

export default customElements.define("to-do-item", TodoItem);
