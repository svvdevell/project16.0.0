"use strict"

let albumList = document.getElementById("albums");
albumList.addEventListener("click", (event) => {
    let removeBtn = event.target.className === "album_btn";
    if (removeBtn) {
        event.target.closest(".album_title").remove();
    }
});

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((result) => {
    result.forEach((element) => {
        let albumTitle = document.createElement("li");
        let btn = document.createElement("button");

        btn.innerHTML = "Delete";
        albumTitle.innerHTML = element.title;

        albumList.append(albumTitle);
        albumTitle.append(btn);

        albumTitle.classList.add("album_title");
        btn.classList.add("album_btn");
    });
})
    .catch((error) => console.error(error));