const dialog = document.querySelector("dialog");
const showDialog = document.querySelector(".show");
const closeDialog = document.querySelector(".close-dialog");
const form = document.querySelector("#getNewBook");
const table = document.querySelector(".table");

form.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();

    form.reset();
    dialog.close();
})

showDialog.addEventListener("click", ()=> dialog.showModal());
closeDialog.addEventListener("click", ()=> dialog.close());

//library function & variable

let myLibrary = [];
function book(title, author, pages, desc, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.desc = desc;
    this.read = read;
    this.id = Math.floor(Math.random() * 30);
}

function addBookToLibrary() {
    const formVal = new FormData(form);
    let tempBook = {};
    formVal.forEach((val, key) => {
        tempBook[key] = val;
    })
    const newBook = new book(tempBook['bookTitle'], tempBook['bookAuthor'], tempBook['bookPages'], tempBook['bookDescription'], tempBook['read']) 
    myLibrary.push(newBook)
    updateDisplay();
}

function updateDisplay() {
    //loop every object in myLibrary
    myLibrary.forEach((obj) => {

        //if book with id already exist in table, dont append to the table
        if (table.querySelector(`.book-${obj.id}`) === null) {
    
            const row = document.createElement("tr");
            row.className = `book-${obj.id}`;
            Object.keys(obj).forEach(key => {
                //create toggle for read column
                if (key === 'read') {
                    const data = document.createElement("td");
                    data.className = key;
                    const toggle = document.createElement("input");
                    toggle.type = "checkbox"
                    toggle.checked = obj[key] === "true";
                    data.appendChild(toggle);
                    row.appendChild(data);
                }
                else if (key !== 'id') {
                    const data = document.createElement("td");
                    data.className = key;
                    data.textContent = obj[key];
                    row.appendChild(data)
                }
            })

            //make remove button, remove from table and myLibrary
            function makeRemoveButton() {
                const removeButton = document.createElement('button');
                removeButton.textContent = 'remove';
                removeButton.addEventListener('click', () => {
                    const parent = removeButton.parentNode
                    const id = Number(parent.className.slice(5))
                    //remove from myLibrary
                    myLibrary.splice(myLibrary.findIndex(obj => obj.id === id), 1);
                    //remove from table
                    table.removeChild(removeButton.parentNode);
                })
                row.appendChild(removeButton);
            }

            makeRemoveButton();
            table.appendChild(row);
        }        
    })
    return true;
    
}
