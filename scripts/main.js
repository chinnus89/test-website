const myHeading1 = document.querySelector("h1");
myHeading1.textContent = "Hello world!";
/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/ 
  //OR

  document.querySelector('html').onclick=()=>{
    alert("Ouch! Stop poking me!");
  }
  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
setUserName();
};
function setUserName() {
const myName = prompt("Please enter your name.");
if (!myName) {
    setUserName();
} else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
}
        