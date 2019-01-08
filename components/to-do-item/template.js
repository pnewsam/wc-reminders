const template = document.createElement("template");

template.innerHTML = /* html */ `
<style>
    .completed {
        text-decoration: line-through;
    }
    div {
        display: grid;
        grid-template-columns: 90% 1fr;
        list-style-type: none;
        margin-bottom: .5rem;
    }
    div:hover {
        background-color: whitesmoke;
    }
    label {
        padding: .25rem .5rem;
    }
    .item.completed label {
        text-decoration: line-through;
    }
    input {
        display: none;
    }
    button {
        background-color: red;
        border: none;
        color: white;
    }
</style>
<div class="item">
    <label></label>
    <input type="checkbox" />
    <button>X</button>
</div>
`;

export default template;
