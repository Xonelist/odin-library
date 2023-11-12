const submit = document.getElementById("btnSubmit");
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
}

function addBookToLibrary() {
    const formVal = new FormData(form);
    let tempBook = {};
    formVal.forEach((val, key) => {
        tempBook[key] = val;
    })
    console.log(tempBook)
    const newBook = new book(tempBook['bookTitle'], tempBook['bookAuthor'], tempBook['bookPages'], tempBook['bookDescription'], tempBook['Read']) 
    myLibrary.push(newBook)
}
function updateDisplay() {
    myLibrary.forEach()
}
