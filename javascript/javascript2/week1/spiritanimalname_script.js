//////// Spirit animal name generator

const myButton = document.getElementById("btn-get-name");
myButton.addEventListener("click", spiritAnimalName);

let spiritAnimal = [
  "The crying butterfly",
  "The brave lion",
  "The crazy bird",
  "The wise bug",
  "The fair horse",
  "The annoing dog",
  "The smart snake",
  "The lovelly cat",
  "The fat bear",
  "The strong duck",
  "The last animal"
];

function spiritAnimalName() {
  let item = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
  console.log(item);
  let myValue = document.getElementById("username").value;
  if (!myValue) {
      alert(`You must insert a name`)
  } else {
    let myOutput = document.getElementById("output");
    myOutput.innerText = `${myValue} - ${item}`;
  }
}
