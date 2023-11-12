const submit = document.getElementById("btnSubmit");
const dialog = document.querySelector("dialog");
const showDialog = document.querySelector(".show");
const closeDialog = document.querySelector(".close-dialog");
const form = document.querySelector("#getNewBook");
const table = document.querySelector(".table");
let id = 0
form.addEventListener("submit", function(event){
    event.preventDefault();
    const formVal = new FormData(form);
    const row = document.createElement("tr");

    formVal.forEach((val, key) => {
        const data = document.createElement("td");
        data.className = key;
        data.textContent = val;
        row.appendChild(data);
    });

    function makeEditButton() {
        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.addEventListener('click', ()=>{
            table.removeChild(removeButton.parentNode);
        })
        row.appendChild(removeButton);
    }

    makeEditButton(id);
    table.appendChild(row);
    
    form.reset();
    dialog.close();
})

showDialog.addEventListener("click", ()=> dialog.showModal());
closeDialog.addEventListener("click", ()=> dialog.close());

let books = [];
function book(title, author, pages, desc, read) {
    let formVal = new FormData(form);    
}

