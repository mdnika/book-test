const titleElement = document.getElementById("title");
const yearElement = document.getElementById("year");
const authorElement = document.getElementById("author");
const genreElement = document.getElementById("genre");
const imageElement = document.getElementById("book-image");

async function loadBook(){
const res = await fetch("https://mdnika.github.io/book-api/book.json");
const obj = await res.json();
console.log(obj);
const {title, author, year, genre, cover} = obj;
titleElement.textContent = title;
yearElement.textContent = year;
authorElement.textContent = author;
genreElement.textContent = genre;
imageElement.src = cover;
}

loadBook(); // не забываем вызвать функцию

// git init 
// Команды ниже мы скопировали в браузере
// git remote add origin git@github.com:AlisherKhamidov/book.git
// git add .
// git commit -m "init"
// git branch -M main
// git push -u origin main