//Задание 1//
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
  let users = xhr.response;
  users.forEach((el) => {
    console.log(el.name);
  });
};

//Задание 2//
const titleText = document.getElementById("title");
const text = document.getElementById("text");
const add = document.getElementById("add");
const count = document.getElementById("count");
const area = document.getElementById("area");
const answer = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
});
answer
  .then((response) => {
    if (response.ok && response.status === 200) {
      return response.json();
    }
    throw new Error();
  })
  .catch(() => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    div.style.border = "2px solid black";
    h2.textContent = "Что-то пошло не так, попробуйте позже!!";
    div.append(h2);
    document.body.append(div);
  })
  .then((value) => {
    value.forEach((user) => {
      count.textContent = `Количество постов ${value.length}`;
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      div.style.border = "2px solid black";
      div.style.padding = "10px";
      h3.style.fontSize = '25px';
      p.style.fontSize = '20px';
      h3.textContent = user.title;
      p.textContent = user.body;
      div.append(h3);
      div.append(p);
      area.append(div);
    });
    add.addEventListener("click", (event) => {
      event.preventDefault();
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      div.style.border = "2px solid black";
      div.style.padding = "10px";
      h3.style.fontSize = '25px';
      p.style.fontSize = '20px';
      h3.textContent = titleText.value;
      p.textContent = text.value;
      div.append(h3);
      div.append(p);
      area.prepend(div);
      value.push(div);
      count.textContent = `Количество постов ${value.length}`;
    });
  });
