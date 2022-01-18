let ul = document.querySelector("ul");
let form = document.querySelector(".add1");
let btn = document.querySelector("#clear-all");

// <.............DELETE OPTION...................>
ul.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.parentElement.remove();
    }
});

// <...................ADD OPTION..................>
form.addEventListener("submit", (e) => {
    e.preventDefault();
    ul.innerHTML =
        `
    <li> 
    ${e.target.addnew.value}
    <button class="delete">
        <span class="material-icons">
            delete_forever
        </span>
    </button>
    </li>
    ` + ul.innerHTML;

    form.reset();
});
// <...............CLEAR_ALL OPTION..................>

btn.addEventListener("click", (e) => {
    ul.innerHTML = "";
});
