// // let ism = "Salohiddin";
// // let ism1 = "Javohir";
// // let ism2 = "Abdurahmon";
// // let ism3 = "Komron";

// // localStorage.setItem("is", ism);
// // localStorage.setItem("is1", ism1);
// // localStorage.setItem("is2", ism2);
// // localStorage.setItem("is3", ism3);

// // console.log(localStorage.getItem("is"));
// // console.log(localStorage.getItem("is1"));
// // console.log(localStorage.getItem("is2"));
// // console.log(localStorage.getItem("is3"));

// // localStorage.clear()

// let obj = { Ism: "Javohir", Fam: "Yakubov", Age: 13 };

// localStorage.setItem("ism", JSON.stringify(obj));

// let nu = JSON.parse(localStorage.getItem("ism"));

// console.log(nu);

function saveName() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    displayGreeting();
  } else {
    alert("Ismni kiriting!");
  }
}

function displayGreeting() {
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    document.getElementById("greeting").innerText = ` ${storedName}`;
  } else {
    document.getElementById("greetings").innerText = "";
  }
}

window.onload = function () {
  displayGreeting();
};

// Save buttonga event listener qo'shish
document.getElementById("saveButton").addEventListener("click", saveName);
