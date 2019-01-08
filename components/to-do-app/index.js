import template from "./template.js";

class ToDoApp extends HTMLElement {
  constructor() {
    super();
    let templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));

    this._todos = [];

    // Bind Methods
    this.addTodo = this.addTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);

    // Get Elements
    this.$addTodoButton = shadowRoot.getElementById("add-todo-button");
    this.$todoItems = shadowRoot.getElementById("todo-items");
    this.$input = shadowRoot.getElementById("input");

    // Add Event Listeners
    this.$addTodoButton.addEventListener("click", this.addTodo);
  }

  renderTodos() {
    this.$todoItems.innerHTML = "";
    this._todos.forEach((todo, index) => {
      let todoItem = document.createElement("to-do-item");
      todoItem.setAttribute("text", todo.text);
      this.$todoItems.appendChild(todoItem);
    });
  }

  set todos(value) {
    this._todos = value;
    this.renderTodos();
  }

  get todos() {
    return this.todos;
  }

  addTodo() {
    if (this.$input.value.length > 0) {
      this._todos.push({ text: this.$input.value, checked: false });
      this.renderTodos();
      this.$input.value = "";
    }
  }
}

export default customElements.define("to-do-app", ToDoApp);
