const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const dialog = document.querySelector('dialog');
const add = document.querySelector('.add');
const inputs = document.querySelectorAll('input');
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const myLibrary = [];

function Book(author, title, pages, have) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.have = have ? "read" : "not read";
}

btn.addEventListener('click', () => {
    dialog.show()
    document.body.style.background = "rgb(0, 0, 0, 0.5)";
})

add.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close()
    document.body.style.background = "none";
    addBook(author.value, title.value, pages.value, read.checked)
    updateLibrary()
    inputClear()
})

function addBook(author, title, pages, have) {
    myLibrary.push(new Book(author, title, pages, have))
}

function updateLibrary() {
    main.innerHTML = '';
    myLibrary.map((a) => {
        const html = `
                <div class="author">${a.author}</div>
                <div class="title">${a.title}</div>
                <div class="pages">${a.pages}</div>
                <div class="have">${a.have}</div>    
            `;

        const div = document.createElement("div");
        const btnDel = document.createElement('button')
        btnDel.classList.add('delete');
        btnDel.textContent = "Delete"
        btnDel.addEventListener('click', () => {
            div.remove();
        })
        div.innerHTML = html;
        div.appendChild(btnDel);
        div.classList.add("main__item")

        main.appendChild(div);
    })
}

function inputClear() {
    inputs.forEach((a) => {
        a.value = '';
    })
}
