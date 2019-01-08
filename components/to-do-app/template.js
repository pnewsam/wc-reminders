const template = document.createElement("template");

const text = {
  title: "To Do App"
};

template.innerHTML = /*html*/ `
  <style>
    :host {
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      display: grid;
      grid-template-rows: 1fr 7fr;
      padding: 20px;
    }
    h1 {
      margin: 0 0 1rem;
      text-align: center;
    }
    ul {
      padding: 0;
    }
    .controls {
      display: flex;
    }
    input {
      padding: .25rem .5rem;
      width: 90%
    }
    button {
      padding: .5rem;
      width: 10%;
    }
    li {
    }
  </style>
  <div>
    <h1>${text.title}</h1>
    <div class="controls">
      <input type="text" placeholder="Add a todo..." id="input" />
      <button id="add-todo-button">➕</button>
    </div>
  </div>
  <ul id="todo-items">
  </ul>
`;

export default template;
